'use strict'

const Model = require('trails-model');
const bcrypt = require('bcrypt');

/**
 * @module User
 * @description TODO document Model
 */
module.exports = class User extends Model {

  static config () {
  	return {
  		methods: {
  			toJSON: function () {
  				const user = this.toObject();
  				delete user.password;

  				return user;
  			}
  		}
  	}
  }

  static schema () {
  	return {
  		email: { 
  			type: String, 
  			required: true,
  			unique: true 
  		},
  		password: {
  			type: String,
  			required: true
  		},
  		emailAddress: {
  			type: String,
  			required: true,
  			unique: true
  		},
  		firstName: String,
  		lastName: String,
  		threads: {
  			type: Number,
  			default: 0
  		},
  		posts: {
  			type: Number,
  			default: 0
  		},
  		createdAt: {
  			type: Date,
  			default: Date.now
  		}
  	}
  }

  static onSchema (schema) {
  	schema.pre('save', function (next) {
  		var user = this;

  		if(!user.isModified('password')) return next();

  		bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
  			if (err) return next(err);

  			bcrypt.hash(user.password, salt, function(err, hash) {
  				user.password = hash;

  				next();
  			});
  		});
  	});
  }
}
