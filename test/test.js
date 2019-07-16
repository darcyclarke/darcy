const assert = require('assert')
const axios = require('axios')
const info = require('../index')

describe('require darcy', () => {
  it('should return an object', () => {
    assert.equal(typeof info, typeof {})
  })
  it('should have a first name', () => {
    assert.ok(!!info['og:profile']['og:profile:first_name'])
  })
})

describe('api', () => {
  it('should return json', async () => {
    const json = await axios.get('https://darcy.netlify.com/.netlify/functions/get')
    console.log(json.headers)
    assert.equal(typeof json, typeof {})
  })
})
