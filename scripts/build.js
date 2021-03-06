const childProcess = require('child_process');
const glob = require('glob');
const path = require('path');
const { promisify } = require('util');
const yargs = require('yargs');

const exec = promisify(childProcess.exec);

const validBundles = [
  // legacy build using ES6 modules
  'legacy',
  // modern build with a rolling target using ES6 modules
  'modern',
  // build for node using commonJS modules
  'node',
  // build with a hardcoded target using ES6 modules
  'stable',
  'cjs'
];

async function run(argv) {
  const { bundle, outDir: relativeOutDir, verbose } = argv;

  if (validBundles.indexOf(bundle) === -1) {
    throw new TypeError(
      `Unrecognized bundle '${bundle}'. Did you mean one of "${validBundles.join('", "')}"?`,
    );
  }

  const env = {
    NODE_ENV: 'production',
    BABEL_ENV: bundle,
    MUI_BUILD_VERBOSE: verbose,
  };
  const babelConfigPath = path.resolve(__dirname, '../babel.config.js');
  const srcDir = path.resolve('./src/coffee');
  const extensions = ['.js', '.ts', '.tsx', '.coffee', '.svelte'];
  const ignore = [
    '**/*.test.js',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/*.d.ts',
  ];

  const topLevelNonIndexFiles = glob
    .sync(`*{${extensions.join(',')}}`, { cwd: srcDir, ignore })
    .filter((file) => {
      return path.basename(file, path.extname(file)) !== 'index';
    });
  const topLevelPathImportsArePackages = topLevelNonIndexFiles.length === 0;

  const outDir = path.resolve(
    relativeOutDir,
    // We generally support top level path imports e.g.
    // 1. `import ArrowDownIcon from '@material-ui/icons/ArrowDown'`.
    // 2. `import Typography from '@material-ui/core/Typography'`.
    // The first case resolves to a file while the second case resolves to a package first i.e. a package.json
    // This means that only in the second case the bundler can decide whether it uses ES modules or CommonJS modules.
    // Different extensions are not viable yet since they require additional bundler config for users and additional transpilation steps in our repo.
    // Switch to `exports` field in v6.
    {
      node: topLevelPathImportsArePackages ? './node' : './',
      modern: './modern',
      stable: topLevelPathImportsArePackages ? './' : './esm',
      legacy: './legacy',
      cjs: './cjs',
    }[bundle],
  );

  const command = [
    'npx babel',
    '--config-file',
    babelConfigPath,
    '--extensions',
    `"${extensions.join(',')}"`,
    srcDir,
    '--out-dir',
    outDir,
    '--ignore',
    // Need to put these patterns in quotes otherwise they might be evaluated by the used terminal.
    `"${ignore.join('","')}"`,
  ].join(' ');

  if (verbose) {
    // eslint-disable-next-line no-console
    console.log(`running '${command}' with ${JSON.stringify(env)}`);
  }

  const { stderr, stdout } = await exec(command, { env: { ...process.env, ...env } });
  if (stderr) {
    throw new Error(`'${command}' failed with \n${stderr}`);
  }

  if (verbose) {
    // eslint-disable-next-line no-console
    console.log(stdout);
  }
}

yargs
  .command({
    command: '$0 <bundle>',
    description: 'build package',
    builder: (command) => {
      return command
        .positional('bundle', {
          description: `Valid bundles: "${validBundles.join('" | "')}"`,
          type: 'string',
        })
        .option('out-dir', { default: './build', type: 'string' })
        .option('verbose', { type: 'boolean' });
    },
    handler: run,
  })
  .help()
  .strict(true)
  .version(false)
  .parse();
