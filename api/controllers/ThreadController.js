'use strict'

const Controller = require('trails-controller')

/**
 * @module ThreadController
 * @description Generated Trails.js Controller.
 */
module.exports = class ThreadController extends Controller{
	all(req, res) {
		this.app.services.ThreadService.getThreads(function(data) {
			return res.status(200).send(data);
		});
	}

	thread(req, res) {
		var id = req.params.id;
		this.app.services.ThreadService.getThread(id, function(data) {
			return res.status(200).send(data);
		});
	}

	put(req, res) {
		this.app.services.ThreadService.putThread(req.body);

		res.status(201).json("This is created");
	}
}