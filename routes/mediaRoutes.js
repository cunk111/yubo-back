import {
  getMedia,
  getMediaByUserId,
} from '../controllers/mediaController'

module.exports = [
  {
    method: 'GET',
    path: '/media',
    handler: (request, h) => getMedia(h),
  },
  {
    method: 'GET',
    path: '/user/{userId}/media',
    handler: (request, h) => getMediaByUserId(h, request.params.userId),
  },
]
