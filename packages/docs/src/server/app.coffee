import Handlebars from 'handlebars'
import fs from 'fs'
import cookie from 'cookie'

import path from 'path'
import favicon from 'serve-favicon'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

import feathers from '@feathersjs/feathers'
import config from 'config'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'
import socketio from '@feathersjs/socketio'

import middleware from './middleware'
import services from './services'
import appHooks from './app.hooks'
import channels from './channels'

import authentication from './authentication.coffee'

app = express feathers()

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
app.use '/', express.static('dist/public', {index: false})

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

# Configure a middleware for 404s and the error handler
app.use express.notFound()
app.use express.errorHandler({ console })

app.hooks appHooks

# WebApp = app

export {app as WebApp}

