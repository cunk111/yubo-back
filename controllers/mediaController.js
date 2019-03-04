import _db from '../modules/db'

const mediaController = {
  async getMedia(req) {
    try {
      const db = _db.getDb()
      const rows = await db.all('SELECT * FROM media', [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },

  async getMediaByUserId(req, userId) {
    try {
      const db = _db.getDb()
      const sql = `SELECT * FROM media WHERE userId=${userId}`
      const rows = await db.all(sql, [])

      return req.response(rows).code(200)
    } catch (e) {
      console.error(e)
      return e
    }
  },
}

module.exports = mediaController
