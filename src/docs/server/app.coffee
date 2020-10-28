import Handlebars from 'handlebars'
import fs from 'fs'

import path from 'path'
import favicon from 'serve-favicon'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import feathers from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'

import middleware from './middleware'
import services from './services'
import appHooks from './app.hooks'
import channels from './channels'

import authentication from './authentication'

app = express feathers()

import App from '../client/Index.svelte'

template = Handlebars.compile(fs.readFileSync("#{process.cwd()}/build/docs/public/index.html").toString())

# Load app configuration
app.configure configuration()
# Enable CORS, security, compression, favicon and body parsing
app.use cors()
app.use helmet()
app.use compress()
app.use express.json()
app.use express.urlencoded({ extended: true })
# app.use favicon(path.join(app.get('public'), 'favicon.png'))
# Host the public folder
app.use '/', express.static('build/docs/public')

# Set up Plugins and providers
app.configure express.rest()
app.configure socketio()

# Configure other middleware (see `middleware/index.js`)
app.configure middleware
app.configure authentication
# Set up our services (see `services/index.js`)
app.configure services
# Set up event channels (see channels.js)
app.configure channels

app.get '*', (req, res, next) ->
  # res.sendFile "#{process.cwd()}/build/public/index.html"
  {html, css} = App.render()
  # console.log html
  result = template {
    content: html
  }
  res.send result



# Configure a middleware for 404s and the error handler
app.use express.notFound()
app.use express.errorHandler({ console })

app.hooks appHooks

# WebApp = app

export {app as WebApp}
