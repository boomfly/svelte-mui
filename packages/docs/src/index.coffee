# require('source-map-support').install()
import {WebApp} from './server/index.coffee'
import debug from 'debug'

log = debug('svelte-mui:index')

host = WebApp.get('host')
port = WebApp.get('port')
server = WebApp.listen(port)

log 'starting-server'

process.on 'unhandledRejection', (reason, p) ->
  log 'Unhandled Rejection at: Promise ', p, reason

server.on 'listening', ->
  log 'Feathers application started on http://%s:%d', host, port

