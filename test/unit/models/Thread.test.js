'use strict'
/* global describe, it */

const assert = require('assert')

describe('Thread Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Thread'])
  })
})
