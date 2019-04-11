import hapi from 'hapi'
import { connectToDB } from './modules/db'
import plugin from './routes/index'

const server = hapi.server({
  port: 3000,
  host: 'localhost',
})

const init = async () => {
  await server.start()
  await server.register(plugin)
  connectToDB()
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  throw new Error(err)
})

init()
