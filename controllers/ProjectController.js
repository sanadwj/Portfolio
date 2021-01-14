const { Controller } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const Project = require('../models/Project')

class ProjectController extends Controller {
  constructor () {
    super(Project, process.env)
  }

  async get (params) {
    const projects = await Project.find(params, Controller.parseFilters(params))
    return Project.convertToJson(projects)
  }

  async getById (id) {
    const project = await Project.findById(id)
    if (project == null) {
      throw new Error(`${Project.resourceName} ${id} not found.`)
    }

    return project.summary()
  }

  async post (body) {
    const project = await Project.create(body)
    return project.summary()
  }

  async put (id, params) {
    const project = await Project.findByIdAndUpdate(id, params, { new: true })
    return project.summary()
  }

  async delete (id) {
    const project = await Project.findByIdAndRemove(id)
    return project
  }
}

module.exports = new ProjectController()

