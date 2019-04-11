import media from './mediaRoutes'
import message from './messageRoutes'
import user from './userRoutes'

const home = [
  {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    const data = 'Hey! Glad you made it here \n \
    - GET /users : will return all existing users \n \
    - GET /user/{userId} : will return a given user \n \
    - GET /users/{qty}/{offset} : will return a paginated subset of users \n \
    - PUT /updateUser : will update a user isDeleted field \n \
    - GET /messages: will return all existing messages \n \
    - GET /user/{userId}/messages : will return all messages of a user \n \
    - GET /media : will return all existing media \n \
    - GET /user/{userId}/media : will return all media of a user'

    return h.response(data).code(200)
  }
  } ]


const plugin = {
  name: 'test',
  version: '1.0.0',
  register: async (server) => {
    const routes = [ ...home, ...user, ...media, ...message ]
    routes.map(route => server.route(route))
  }
}

export default plugin
