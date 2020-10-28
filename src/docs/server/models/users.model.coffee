import NeDB from 'nedb'
import path from 'path'

export default (app) ->
  dbPath = app.get('nedb')
  Model = new NeDB {
    filename: path.join(dbPath, 'users.db')
    autoload: true
  }

  Model.ensureIndex {fieldName: 'username', unique: true}

  Model
