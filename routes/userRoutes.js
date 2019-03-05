import {
  getUsers,
  getUserById,
  getUserByName,
  getUserList,
  setSoftDelete,
} from '../controllers/userController'

module.exports = [
  {
    method: ['GET', 'PUT'],
    path: '/users',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => (request.method === 'get' ?
      getUsers(h) : setSoftDelete(h, request.payload)),
  },
  {
    method: 'GET',
    path: '/user/{userId}',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => getUserById(h, request.params.userId),
  },
  {
    method: 'GET',
    path: '/userbla/{name}',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => getUserByName(h, request.params.name),
  },
  {
    method: 'GET',
    path: '/users/{qty}/{offset}',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => getUserList(h, request.params.qty, request.params.offset),
  },
]
