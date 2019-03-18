const info = require('../index')
const assert = require('assert')

describe('require darcy', () => {
  let info = require('../index')
  it('should return an object', () => {
    assert.equal(typeof info, typeof {})
  })
  it('should have a first name', () => {
    assert.ok(!!info['og:profile']['og:profile:first_name'])
  })
})
