const darcy = require('../index')
exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(darcy, 2)
  })
}
