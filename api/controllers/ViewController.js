'use strict'

const Controller = require('trails-controller')

module.exports = class ViewController extends Controller {
  helloWorld(req, res) {
    res.status(200).send('Hello Trails.js !')
  }

  all(req, res) {
  	res.sendFile(this.app.config.main.paths.www + '/index.html')
  }
}
