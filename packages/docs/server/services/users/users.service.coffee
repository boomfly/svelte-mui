# Initializes the `users` service on path `/users`
import createService from 'feathers-nedb'
import createModel from '../../models/users.model.coffee'
import hooks from './users.hooks.coffee'

export default (app) ->
  Model = createModel(app)
  paginate = app.get('paginate')

  options = {
    name: 'users'
    Model
    paginate
  }

  # Initialize our service with any options it requires
  app.use '/users', createService(options)

  # Get our initialized service so that we can register hooks and filters
  service = app.service('users')

  service.hooks hooks

  result = await service.find(username: 'admin')
  unless result.data[0]
    service.create username: 'admin', password: '123456'
