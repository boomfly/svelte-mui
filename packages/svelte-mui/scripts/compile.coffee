svelte = require('svelte/compiler')
fs = require('fs')
fse = require('fs-extra')
path = require('path')
glob = require('glob')
sveltePreprocess = require('svelte-preprocess')
process = require('process')
del = require('del')
coffeesript = require 'coffeescript'

BASE = process.cwd()
buildPath = path.join(BASE, './dist')
srcPath = path.join(BASE, './src')
processor = sveltePreprocess()

del.sync ['src/dist/**', '!src/dist/README.md']

glob 'src/**/*.svelte', {}, (_, files) ->
  for file in files
    source = fs.readFileSync(path.join(BASE, file), 'utf-8')
    filename = path.basename(file)
    # filename = path.basename(file.replace('.svelte', '.js'))
    # filename = file
    dirname = path.dirname(file)
    process.chdir(path.join(BASE, dirname))
      
    { code } = await svelte.preprocess(source, processor)
    code = code.replace /\slang=['"](coffeescript|coffee)['"]/, ''
    console.log 'compiled', file

    # {js} = svelte.compile code, {generate: 'ssr'}

    # console.log 'compiled', js.code

    outFolder = path.join(BASE, path.dirname(file.replace('src', 'dist')))
    fs.mkdirSync(outFolder, { recursive: true })
    fs.writeFileSync(path.join(outFolder, filename), code)

process.chdir(BASE)

glob 'src/**/*.coffee', {}, (_, files) ->
  files.forEach (file) ->
    source = fs.readFileSync(path.join(BASE, file), 'utf-8')
    filename = path.basename(file.replace('.coffee', '.js'))

    # console.log source
    # console.log file, source.match(/(import|export)\s+.+\s*?from\s*?["'].*?(\.coffee)['"]([.*$]|$|)/g)
    
    # code = coffeesript.compile source, {transpile: {presets: ['@babel/env']}}
    code = coffeesript.compile source

    outFolder = path.join(BASE, path.dirname(file.replace('src', 'dist')))
    fs.mkdirSync(outFolder, { recursive: true })
    # fs.copyFileSync(path.join(BASE, file), path.join(outFolder, filename))
    fs.writeFileSync(path.join(outFolder, filename), code)

createModulePackages = ({src, dest}) ->
  directoryPackages = glob.sync('*/index.js', { cwd: src }).map(path.dirname)

  await Promise.all(
    directoryPackages.map (directoryPackage) ->
      packageJson = {
        sideEffects: false,
        module: './index.js',
        main: './index.js',
        svelte: './index.js',
      }
      packageJsonPath = path.join(dest, directoryPackage, 'package.json')

      [typingsExist] = await Promise.all [
        fse.exists(path.join(dest, directoryPackage, 'index.d.ts')),
        fse.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2)),
      ]
      packageJsonPath
  )

createModulePackages {src: buildPath, dest: buildPath}