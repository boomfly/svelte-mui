{ preprocess } = require('svelte/compiler')
fs = require('fs')
path = require('path')
glob = require('glob')
sveltePreprocess = require('svelte-preprocess')
process = require('process')
del = require('del')
coffeesript = require 'coffeescript'

BASE = process.cwd()
processor = sveltePreprocess {
  scss:
    includePaths: [path.join(BASE, 'theme')]
}

del.sync ['src/js/**', '!src/js/README.md']

glob 'src/coffee/**/*.svelte', {}, (_, files) ->
  for file in files
    source = fs.readFileSync(path.join(BASE, file), 'utf-8')
    filename = path.basename(file)
    dirname = path.dirname(file)
    process.chdir(path.join(BASE, dirname))
    { code } = await preprocess(source, processor, { filename })
    code = code.replace /\slang=['"](coffeescript|coffee)['"]/, ''
    outFolder = path.join(BASE, path.dirname(file.replace('coffee', 'js')))
    fs.mkdirSync(outFolder, { recursive: true })
    fs.writeFileSync(path.join(outFolder, filename), code)

process.chdir(BASE)

glob 'src/coffee/**/*.coffee', {}, (_, files) ->
  files.forEach (file) ->
    source = fs.readFileSync(path.join(BASE, file), 'utf-8')
    filename = path.basename(file.replace('.coffee', '.js'))
    code = coffeesript.compile source
    outFolder = path.join(BASE, path.dirname(file.replace('coffee', 'js')))
    fs.mkdirSync(outFolder, { recursive: true })
    # fs.copyFileSync(path.join(BASE, file), path.join(outFolder, filename))
    fs.writeFileSync(path.join(outFolder, filename), code)
