import users from './users/users.service'
import settings from './settings/settings.service'

export default (app) ->
  app.configure users
  # app.configure settings
