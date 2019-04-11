import sqlite from 'sqlite'

let db

export const connectToDB = async () => {
  db = await sqlite.open('./db.sqlite', { Promise })
}

export const getDb = () => {
  return db
}

