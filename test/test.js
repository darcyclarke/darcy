const info = require('../index')
const assert = require('assert')
describe('darcy', () => {
  it('should return an object', () => {
    assert.equal(typeof info, typeof {})
  })
  it('should have a name', () => {
    assert.ok(!!info.name)
  })
})
