const hapi = require('hapi')
const routes = require('./routing')
const sql = require('./modules/db')

const server = hapi.server({
  port: 3000,
  host: 'localhost',
})

const init = async () => {
  await server.start()
  await server.register(routes)
  sql.connectToDB()
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()
