const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  type: {type: String, default: ''},
  image: { type: String, default: '' },
  lang: {type: String, default: ''},
  name: { type: String, default: '', display: true },
  description: { type: String, default: '' },
  git: { type: String, default: '' },
  gitLink: { type: String, default: '' },
  live: { type: String, default: '' },
  liveLink: { type: String, default: '' },
  schema: { type: String, default: 'project', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Project extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Project
