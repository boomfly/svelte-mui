import fs from 'fs'
import cookie from 'cookie'
import path from 'path'
import Handlebars from 'handlebars'
import App from '/src/client/App.svelte'
import indexTemplate from '../templates/index.hbs'

template = Handlebars.compile(indexTemplate)

export default (app) ->
  app.get '*', (req, res, next) ->
    # res.sendFile "#{process.cwd()}/build/public/index.html"
    faviconUrl = ''
    try
      manifest = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'public/manifest.json')))
      faviconUrl = manifest['favicon.ico']
    catch e
      console.log 'Cannot load manifest'

    cookies = cookie.parse(req.headers.cookie ? '')
    # console.log 'cookies', cookies
    theme = cookies['mui-theme'] ? 'dark'
    {html, css} = App.render({theme})

    head = ''
    
    result = template {
      faviconUrl
      content: html
      css: css.code
      htmlAttributes: "theme='#{theme}'"
    }
    # console.log 'html', result, html
    # result = 'Hello world'
    res.send result
