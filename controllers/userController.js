import _db from '../modules/db'

const userController = {
  async getUsers(req) {
    try {
      const db = _db.getDb()
      const rows = await db.all('SELECT * FROM users', [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getUserById(req, userId) {
    try {
      const db = _db.getDb()
      const sql = `SELECT * FROM users WHERE id=${userId}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getUserByFullName(req, fullName) {
    try {
      const db = _db.getDb()
      const sql = `SELECT * FROM users WHERE usernale LIKE ${fullName}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getUserList(req, qty, offset) {
    try {
      const db = _db.getDb()
      const sql = `SELECT * FROM users LIMIT ${qty} OFFSET ${offset}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async setSoftDelete(req, payload) {
    try {
      const user = JSON.parse(payload)
      const db = _db.getDb()
      const sql = `UPDATE users SET isDeleted = ${user.isDeleted} WHERE id=${user.id}`
      const rows = await db.all(sql, [])

      return req.response(payload).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },
}

module.exports = userController
