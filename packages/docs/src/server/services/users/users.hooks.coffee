import { hooks as authentication } from '@feathersjs/authentication'
{ authenticate } = authentication
import { hooks as local } from '@feathersjs/authentication-local'
{ hashPassword, protect } = local

# import gravatar from '../../hooks/gravatar'

export default {
  before:
    all: []
    find: [ authenticate('jwt') ]
    get: [ authenticate('jwt') ]
    create: [ hashPassword('password') ]
    update: [ hashPassword('password'), authenticate('jwt') ]
    patch: [ hashPassword('password'), authenticate('jwt') ]
    remove: [ authenticate('jwt') ]

  after:
    all: [
      # Make sure the password field is never sent to the client
      # Always must be the last hook
      protect('password')
    ]
    find: []
    get: []
    create: []
    update: []
    patch: []
    remove: []

  error:
    all: []
    find: []
    get: []
    create: []
    update: []
    patch: []
    remove: []
}
