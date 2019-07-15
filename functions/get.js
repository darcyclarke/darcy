const darcy = require('../index')
console.log(darcy)
exports.handler = function (event, context, callback) {
  if (!event || !context) {
    console.log(event, context)
    return null
  }
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(darcy, 2)
  })
}
