const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  image: { type: String, default: '' },
  cat: { type: String, default: '', display: true },
  name: { type: String, default: '' },
  schema: { type: String, default: 'exp', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Exp extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Exp
