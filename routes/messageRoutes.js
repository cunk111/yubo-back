import { getMessages, getMessagesByUserId } from '../controllers/messageController'

const messageRoutes = [
  {
    method : 'GET',
    path   : '/messages',
    handler: (request, h) => getMessages(h),
  },
  {
    method : 'GET',
    path   : '/user/{userId}/messages',
    handler: (request, h) => getMessagesByUserId(h, request.params.userId),
  }
]

export default messageRoutes
