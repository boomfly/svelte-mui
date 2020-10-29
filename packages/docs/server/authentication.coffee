import authentication, {AuthenticationService, JWTStrategy} from '@feathersjs/authentication'
import jwt from '@feathersjs/authentication-jwt'
import local, {LocalStrategy} from '@feathersjs/authentication-local'


export default (app) ->
  config = app.get('authentication')

  authService = new AuthenticationService(app)

  authService.register('jwt', new JWTStrategy());
  authService.register('local', new LocalStrategy());

  app.use('/authentication', authService);

  # Set up authentication with the secret
  # app.configure authentication(config)
  # app.configure jwt()
  # app.configure local()

  # The `authentication` service is used to create a JWT.
  # The before `create` hook registers strategies that can be used
  # to create a new valid JWT (e.g. local or oauth2)
  # app.service('authentication').hooks {
  #   before:
  #     create: [
  #       authentication.hooks.authenticate config.strategies
  #     ]
  #     remove: [
  #       authentication.hooks.authenticate('jwt')
  #     ]
  # }
