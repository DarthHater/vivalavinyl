/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/{action}',
    handler: 'ViewController.all'
  },
  {
    method: 'GET',
    path: '/{action}/{id}',
    handler: 'ViewController.all'
  },
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },
  {
    method: [ 'GET'],
    path: '/api/v1/threads',
    handler: 'ThreadController.all'
  },
  {
    method: ['GET'],
    path: '/api/v1/threads/:id',
    handler: 'ThreadController.thread'
  },
  {
    method: [ 'PUT' ],
    path: '/api/v1/threads',
    handler: 'ThreadController.put'
  },
  {
    method: ['GET'],
    path: '/api/v1/posts/:id',
    handler: 'PostController.all'
  },
  {
    method: [ 'PUT' ],
    path: '/api/v1/posts',
    handler: 'PostController.put'
  }
]
