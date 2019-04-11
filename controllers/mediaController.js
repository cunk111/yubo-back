import { getDb } from '../modules/db'

export const getMedia = async (req) => {
  try {
    const db = getDb()
    const rows = await db.all('SELECT * FROM media', [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getMediaByUserId = async (req, userId) => {
  try {
    const db = getDb()
    const sql = `SELECT * FROM media WHERE userId=${userId}`
    const rows = await db.all(sql, [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}
