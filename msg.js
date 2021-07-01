module.exports = function getShortMessages(messages) {
  var msg=messages.filter(function(item) {
    return item.message.length < 50
  }).map(function(item) {
    return item.message
  })
  return msg
}