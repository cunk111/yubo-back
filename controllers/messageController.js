import _db from '../modules/db'

const messageController = {
  async getMessages(req) {
    try {
      const db = _db.getDb()
      const rows = await db.all('SELECT * FROM messages', [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getMessagesByUserId(req, userId) {
    try {
      const db = _db.getDb()
      const sql = `SELECT * FROM messages WHERE senderId=${userId} OR receiverId=${userId}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },
}

module.exports = messageController
