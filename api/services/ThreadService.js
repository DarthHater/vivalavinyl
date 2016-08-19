'use strict'

const Service = require('trails-service')

/**
 * @module ThreadService
 * @description TODO document Service
 */
module.exports = class ThreadService extends Service {
	getThreads(callback)  {
		var threads = this.app.orm.Thread.find().limit(10)
			.exec(function (err, threads) {
				console.log(threads);
				callback(threads);
			});
	}

	getThread(id, callback) {
		var thread = this.app.orm.Thread.findOne({ _id: id})
			.exec(function (err, thread) {
				console.log(thread);
				callback(thread);
			});
	}

	putThread(body) {
		body.id = Date.now();
		body.createdBy = body.author;
		body.updatedBy = body.author;
		body.datePosted = Date.now();
		body.dateUpdated = Date.now();

		var thread = this.app.orm.Thread(body)
			.save(function (err) {
				if (err) return '500';
		});
	}

	deleteThread() {
		return null;
	}
}

