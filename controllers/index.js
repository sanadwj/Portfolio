const PostController = require('./PostController')
const ExpController = require('./ExpController')
const MessageController = require('./MessageController')
const ProjectController = require('./ProjectController')

module.exports = {
  post: PostController,
  exp: ExpController,
  message: MessageController,
  project: ProjectController
}
