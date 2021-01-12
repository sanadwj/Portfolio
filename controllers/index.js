const PostController = require('./PostController')
const ExpController = require('./ExpController')
const MessageController = require('./MessageController')

module.exports = {
  post: PostController,
  exp: ExpController,
  message: MessageController
}
