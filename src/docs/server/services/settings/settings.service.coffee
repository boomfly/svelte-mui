import hooks from './settings.hooks.coffee'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import Debug from 'debug'

log = Debug('svelte-mui:settings')

export default (app) ->
  adapter = new FileSync "#{app.get('nedb')}/config.json"
  db = low adapter

  db.defaults({
    version: '0.0.1'
  }).write()

  # log 'Settings intialized'

  # Initialize our service with any options it requires
  app.use '/settings', {
    get: (id, params) ->
      Promise.resolve db.get(id).value()
    update: (id, data) ->
      {value} = data

      db.set(id, data.value ? data).write()
      
      Promise.resolve({id, data})
  }

  # Get our initialized service so that we can register hooks and filters
  service = app.service('settings')

  service.hooks hooks
