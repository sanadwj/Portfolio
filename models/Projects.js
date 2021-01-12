const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  image: { type: String, default: '' },
  date: { type: Date, default: '' },
  name: { type: String, default: '', display: true },
  description: { type: String, default: '' },
  git: { type: String, default: '' },
  gitLink: { type: String, default: '' },
  live: { type: String, default: '' },
  liveLink: { type: String, default: '' },
  schema: { type: String, default: 'projects', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Projects extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Projects
