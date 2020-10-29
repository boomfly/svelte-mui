import { hooks as authentication } from '@feathersjs/authentication'
{ authenticate } = authentication
import { hooks as local } from '@feathersjs/authentication-local'
{ hashPassword, protect } = local

export default {
  before:
    all: []
    find: [ authenticate('jwt') ]
    get: [ authenticate('jwt') ]
    create: [ authenticate('jwt') ]
    update: [ authenticate('jwt') ]
    patch: [ authenticate('jwt') ]
    remove: [ authenticate('jwt') ]

  after:
    all: []
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
