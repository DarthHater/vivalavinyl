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

	putThread(body) {
		body.id = Date.now();
		var thread = this.app.orm.Thread(body)
			.save(function (err) {
				if (err) return '500';
		});
	}

	deleteThread() {
		return null;
	}
}

