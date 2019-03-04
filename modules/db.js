import sqlite from 'sqlite'

let _db

module.exports = {
  async connectToDB() {
    const db = await sqlite.open('./db.sqlite', { Promise })
    _db = db
    return _db
  },
  getDb() {
    return _db
  },
}
