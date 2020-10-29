import { preprocess } from 'svelte/compiler'
import fs from 'fs'
import path from 'path'
import glob from 'glob'
import sveltePreprocess from 'svelte-preprocess'
import process from 'process'
import del from 'del'

BASE = process.cwd()
processor = sveltePreprocess {
  scss:
    includePaths: [path.join(BASE, 'theme')]
})

del.sync ['dist/**']

glob 'src/coffee/**/*.svelte', {}, (_, files) ->
  for file in files
    source = fs.readFileSync(path.join(BASE, file), 'utf-8')
    filename = path.basename(file)
    dirname = path.dirname(file)
    process.chdir(path.join(BASE, dirname))
    { code } = await preprocess(source, processor, { filename })
    outFolder = path.join(BASE, path.dirname(file.replace('src', 'dist')))
    fs.mkdirSync(outFolder, { recursive: true })
    fs.writeFileSync(path.join(outFolder, filename), code)

process.chdir(BASE)

glob 'src/**/*.js', {}, (_, files) ->
  files.forEach (file) ->
    outFolder = path.join(BASE, path.dirname(file.replace('src', 'dist')))
    filename = path.basename(file)
    fs.mkdirSync(outFolder, { recursive: true })
    fs.copyFileSync(path.join(BASE, file), path.join(outFolder, filename))
