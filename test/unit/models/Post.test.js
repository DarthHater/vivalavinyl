'use strict'
/* global describe, it */

const assert = require('assert')

describe('Post Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Post'])
  })
})
