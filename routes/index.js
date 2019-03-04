import user from './userRoutes'
import media from './mediaRoutes'
import message from './messageRoutes'

const home = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    const data = 'Hey! Glad you made it here \
    - GET /users : will return all existing users \
    - GET /user/{userId} : will return a given user \
    - GET /users/{qty}/{offset} : will return a paginated subset of users \
    - PUT /updateUser : will update a user isDeleted field \
    - GET /messages: will return all existing messages \
    - GET /user/{userId}/messages : will return all messages of a user \
    - GET /media : will return all existing media \
    - GET /user/{userId}/media : will return all media of a user'

    return h.response(data).code(200)
  },
}


const plugin = {
  name: 'test',
  version: '1.0.0',
  register: async (server) => {
    const routes = [].concat(home, user, media, message)
    routes.map(route => server.route(route))
  },
}

module.exports = plugin
