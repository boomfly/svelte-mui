svelte = require('svelte/compiler')
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
    # filename = path.basename(file)
    filename = path.basename(file.replace('.svelte', '.js'))
    dirname = path.dirname(file)
    process.chdir(path.join(BASE, dirname))

    pattern = /(?<begin>import|export)(?<middle>\s+.+\s*?from\s*?["'].*?)(?<ext>\.coffee)(?<end>['"])/g
    match = pattern.exec(source)
    if match
      source = source.replace pattern, (...args) ->
        {begin, middle, ext, end} = params = args[args.length - 1]
        "#{begin}#{middle}.js#{end}"
      
    { code } = await svelte.preprocess(source, processor, { filename })
    code = code.replace /\slang=['"](coffeescript|coffee)['"]/, ''

    {js} = svelte.compile code, {generate: 'ssr'}

    # console.log 'compiled', js.code

    outFolder = path.join(BASE, path.dirname(file.replace('coffee', 'js')))
    fs.mkdirSync(outFolder, { recursive: true })
    fs.writeFileSync(path.join(outFolder, filename), js.code)

process.chdir(BASE)

glob 'src/coffee/**/*.coffee', {}, (_, files) ->
  files.forEach (file) ->
    source = fs.readFileSync(path.join(BASE, file), 'utf-8')
    filename = path.basename(file.replace('.coffee', '.js'))

    # console.log source
    # console.log file, source.match(/(import|export)\s+.+\s*?from\s*?["'].*?(\.coffee)['"]([.*$]|$|)/g)

    pattern = /(?<begin>import|export)(?<middle>\s+.+\s*?from\s*?["'].*?)(?<ext>\.coffee)(?<end>['"])/g
    match = pattern.exec(source)
    if match
      source = source.replace pattern, (...args) ->
        {begin, middle, ext, end} = params = args[args.length - 1]
        "#{begin}#{middle}.js#{end}"
    
    # code = coffeesript.compile source, {transpile: {presets: ['@babel/env']}}
    code = coffeesript.compile source

    outFolder = path.join(BASE, path.dirname(file.replace('coffee', 'js')))
    fs.mkdirSync(outFolder, { recursive: true })
    # fs.copyFileSync(path.join(BASE, file), path.join(outFolder, filename))
    fs.writeFileSync(path.join(outFolder, filename), code)
