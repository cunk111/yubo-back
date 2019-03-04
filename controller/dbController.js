import sqlite from '../modules/db'

const jsonController = {
  async getUsers(req) {
    try {
      const db = sqlite.getDb()
      const rows = await db.all('SELECT * FROM users', [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getUserById(req, userId) {
    try {
      const db = sqlite.getDb()
      const sql = `SELECT * FROM users WHERE id=${userId}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getUserList(req, qty, offset) {
    try {
      const db = sqlite.getDb()
      const sql = `SELECT * FROM users LIMIT ${qty} OFFSET ${offset}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getMessages(req) {
    try {
      const db = sqlite.getDb()
      const rows = await db.all('SELECT * FROM messages', [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getMedia(req) {
    try {
      const db = sqlite.getDb()
      const rows = await db.all('SELECT * FROM media', [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getMessagesByUserId(req, userId) {
    try {
      const db = sqlite.getDb()
      const sql = `SELECT * FROM messages WHERE senderId=${userId} OR receiverId=${userId}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getMediaByUserId(req, userId) {
    try {
      const db = sqlite.getDb()
      const sql = `SELECT * FROM media WHERE userId=${userId}`
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
      const db = sqlite.getDb()
      const sql = `UPDATE users SET isDeleted = ${user.isDeleted} WHERE id=${user.id}`
      const rows = await db.all(sql, [])

      return req.response(payload).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },
}

module.exports = jsonController
