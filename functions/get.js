const darcy = require('../')
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(darcy, 2)
  })
}
