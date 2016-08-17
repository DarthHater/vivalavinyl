'use strict'

const Model = require('trails-model')

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
		 	title: String
		 	//createdBy: String,
		 	//updatedBy: String,
		 	//updatedId: mongoose.Schema.Types.ObjectId,
		 	//datePosted: { type: Date, default: Date.now },
		 	//dateUpdated: { type: Date, default: Date.now },
		 	//numberOfPosts: { type: Number, default: 1 }
 		}
	}
}