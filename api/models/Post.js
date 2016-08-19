'use strict'

const Model = require('trails-model');
const Schema = require('trailpack-mongoose/node_modules/mongoose').Schema;

/**
 * @module Post
 * @description A model for Posts
 */
module.exports = class Post extends Model {

  static config () {
  }

  static schema () {
  	return {
	 	body: String,
	 	creator: Schema.ObjectId,
	 	author: String,
	 	thread: Schema.ObjectId,
	 	createdAt: { type: Date, default: Date.now }
	 }
  }
}
