import { getDb } from '../modules/db'

export const getMessages = async (req) => {
  try {
    const db = getDb()
    const rows = await db.all('SELECT * FROM messages', [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getMessagesByUserId = async (req, userId) => {
  try {
    const db = getDb()
    const sql = `SELECT * FROM messages WHERE senderId=${userId} OR receiverId=${userId}`
    const rows = await db.all(sql, [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}
