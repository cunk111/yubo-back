import {
  getUsers,
  getUserById,
  getUserList,
  getMedia,
  getMediaByUserId,
  getMessages,
  getMessagesByUserId,
  setSoftDelete,
} from './controller/dbController'

const routing = {
  name: 'routing',
  version: '1.0.0',
  async register(server) {
    server.route({
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
    })

    server.route({
      method: 'GET',
      path: '/users',
      handler: (request, h) => getUsers(h),
    })

    server.route({
      method: 'GET',
      path: '/user/{userId}',
      config: { cors: { origin: ['*'] } },
      handler: (request, h) => getUserById(h, request.params.userId),
    })

    server.route({
      method: 'GET',
      path: '/users/{qty}/{offset}',
      config: { cors: { origin: ['*'] } },
      handler: (request, h) => getUserList(h, request.params.qty, request.params.offset),
    })

    server.route({
      method: 'PUT',
      path: '/updateUser',
      config: { cors: { origin: ['*'] } },
      handler: (request, h) => setSoftDelete(h, request.payload),
    })

    server.route({
      method: 'GET',
      path: '/messages',
      handler: (request, h) => getMessages(h),
    })

    server.route({
      method: 'GET',
      path: '/user/{userId}/messages',
      handler: (request, h) => getMessagesByUserId(h, request.params.userId),
    })

    server.route({
      method: 'GET',
      path: '/media',
      handler: (request, h) => getMedia(h),
    })

    server.route({
      method: 'GET',
      path: '/user/{userId}/media',
      handler: (request, h) => getMediaByUserId(h, request.params.userId),
    })
  },
}

module.exports = routing
