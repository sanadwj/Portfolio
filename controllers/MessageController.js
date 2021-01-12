const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Message = require('../models/Message')

class MessageController extends Controller {
  constructor () {
    super(Message, process.env)
  }

  async get (params) {
    const messages = await Message.find(params, Controller.parseFilters(params))
    return Message.convertToJson(messages)
  }

  async getById (id) {
    const message = await Message.findById(id)
    if (message == null) {
      throw new Error(`${Message.resourceName} ${id} not found.`)
    }

    return message.summary()
  }

  async post (body) {
    const message = await Message.create(body)
    return message.summary()
  }

  async put (id, params) {
    const message = await Message.findByIdAndUpdate(id, params, { new: true })
    return message.summary()
  }

  async delete (id) {
    const message = await Message.findByIdAndRemove(id)
    return message
  }
}

module.exports = new MessageController()

