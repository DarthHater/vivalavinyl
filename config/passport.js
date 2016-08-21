'use strict'

const SECRET = process.env.TOKEN_SECRET || 'mysupersecuretoken'

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const EXPIRES_IN_SECONDS = 60 * 60 * 24
const ALGORITHM = 'HS256'
const ISSUER = 'localhost'
const AUDIENCE = 'localhost'

module.exports = {
  redirect: {
    login: '/',//Login successful
    logout: '/'//Logout successful
  },
  /**
   * Auth strategies allowed
   */
  strategies: {
    jwt: {
      strategy: JwtStrategy,
      tokenOptions: {
        expiresInSeconds: EXPIRES_IN_SECONDS,
        secret: SECRET,
        algorithm: ALGORITHM,
        issuer: ISSUER,
        audience: AUDIENCE
      },
      options: {
        secretOrKey: SECRET,
        issuer: ISSUER,
        audience: AUDIENCE,
        jwtFromRequest: ExtractJwt.fromAuthHeader() //Authorization: JWT JSON_WEB_TOKEN_STRING
      }
    },
    //Enable local strategy
    local: {
      strategy: require('passport-local').Strategy
    },
  }
}