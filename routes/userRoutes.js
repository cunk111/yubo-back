import {
  getUsers,
  getUserById,
  getUserList,
  setSoftDelete,
} from '../controllers/userController'

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: (request, h) => getUsers(h),
  },
  {
    method: 'GET',
    path: '/user/{userId}',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => getUserById(h, request.params.userId),
  },
  {
    method: 'GET',
    path: '/users/{qty}/{offset}',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => getUserList(h, request.params.qty, request.params.offset),
  },
  {
    method: 'PUT',
    path: '/updateUser',
    config: { cors: { origin: ['*'] } },
    handler: (request, h) => setSoftDelete(h, request.payload),
  },
]
