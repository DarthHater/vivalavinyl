'use strict'

const Policy = require('trails-policy')

/**
 * @module AuthPolicy
 * @description TODO document Policy
 */
module.exports = class AuthPolicy extends Policy {
	isAuthenticated(req, res, next) {
		var token;

		if (req.headers && req.headers.authorization) {
			return null;
		}

		next()
	}
}