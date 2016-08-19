'use strict'

const Model = require('trails-model');
const Schema = require('trailpack-mongoose/node_modules/mongoose').Schema;

/**
 * @module Thread
 * @description A model for Threads
 */
module.exports = class Thread extends Model {
	static schema () {
		return {
			id: { 
				type: Date, 
				default: Date.now 
			},
		 	author: String,
		 	title: String,
		 	createdBy: String,
		 	updatedBy: String,
		 	updatedId: Schema.ObjectId,
		 	datePosted: { type: Date, default: Date.now },
		 	dateUpdated: { type: Date, default: Date.now },
		 	numberOfPosts: { type: Number, default: 1 }
 		}
	}
}