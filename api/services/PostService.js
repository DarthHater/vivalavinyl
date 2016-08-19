'use strict'

const Service = require('trails-service')

/**
 * @module PostService
 * @description TODO document Service
 */
module.exports = class PostService extends Service {

	getPosts(id, callback) {
		var posts = this.app.orm.Post.find({ _threadid: id})
			.exec(function (err, posts) {
				callback(posts);
			});
	}

	putPost(body) {
		body.author = 'Jeffry Hesse';
		body.createdAt = Date.now();
		body.creator = '';

		var post = this.app.orm.Post(body)
			.save(function (err) {
				if (err) return '500';
		});
	}
}

