'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {
  all(req, res) {
  	res.sendFile(this.app.config.main.paths.www + '/index.html')
  }
}
