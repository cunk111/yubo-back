import { getDb } from '../modules/db'

export const getUsers = async (req) => {
  try {
    console.log('hej', getDb)
    const db = getDb()
    console.log({ db })
    const rows = await db.all('SELECT * FROM users', [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getUserById = async (req, userId) => {
  try {
    const db = getDb()
    const sql = `SELECT * FROM users WHERE id=${userId}`
    const rows = await db.all(sql, [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getUserByName = async (req, name) => {
  try {
    const db = getDb()
    const sql = `SELECT * FROM users WHERE username LIKE '%${name}%' OR name LIKE '%${name}%'`
    console.log(sql)
    const rows = await db.all(sql, [])
    console.log({ rows })
    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}

export const getUserList = async (req, qty, page = 1) => {
  try {
    const db = getDb()
    const offset = (page - 1) * qty
    const sql = `SELECT * FROM users LIMIT ${qty} OFFSET ${offset}`
    const rows = await db.all(sql, [])

    return req.response(rows).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}

export const setSoftDelete = async (req, payload) => {
  try {
    console.log({ payload })
    if (!payload) {
      const msg = {
        errorCode: '400',
        error    : 'Bad Request',
        message  : 'Request payload is empty',
      }
      return req.response(msg).code(400)
    }
    const user = JSON.parse(payload)

    if ((!('isDeleted' in user) || (!('id' in user)))) {
      const msg = {
        errorCode: '400',
        error    : 'Bad Request',
        message  : 'Request payload is faulty',
      }
      return req.response(msg).code(400)
    }

    const db = getDb()
    const sql = `UPDATE users SET isDeleted = ${user.isDeleted} WHERE id=${user.id}`
    await db.all(sql, [])

    return req.response(payload).code(200)
  } catch (e) {
    console.error(e)
    return e
  }
}
