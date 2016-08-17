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

  /**
   * Render the Default view
   */
  {
    method: 'GET',
    path: '/',
    handler: 'ViewController.all'
  },

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
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
    method: [ 'PUT' ],
    path: '/api/v1/threads',
    handler: 'ThreadController.put'
  }

]
