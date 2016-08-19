'use strict'

const Controller = require('trails-controller')

/**
 * @module PostController
 * @description Generated Trails.js Controller.
 */
module.exports = class PostController extends Controller{
	all(req, res) {
		var id = req.params.id;
		this.app.services.PostService.getPosts(id, function(data) {
			return res.status(200).send(data);
		});
	}

	put(req, res) {
		this.app.services.PostService.putPost(req.body);

		res.status(201).json("This is created");
	}
}

