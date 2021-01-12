const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Exp = require('../models/Exp')

class ExpController extends Controller {
  constructor () {
    super(Exp, process.env)
  }

  async get (params) {
    const exps = await Exp.find(params, Controller.parseFilters(params))
    return Exp.convertToJson(exps)
  }

  async getById (id) {
    const exp = await Exp.findById(id)
    if (exp == null) {
      throw new Error(`${Exp.resourceName} ${id} not found.`)
    }

    return exp.summary()
  }

  async post (body) {
    const exp = await Exp.create(body)
    return exp.summary()
  }

  async put (id, params) {
    const exp = await Exp.findByIdAndUpdate(id, params, { new: true })
    return exp.summary()
  }

  async delete (id) {
    const exp = await Exp.findByIdAndRemove(id)
    return exp
  }
}

module.exports = new ExpController()

