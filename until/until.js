var crypto = require('crypto')
var until = {
  //加密
  encode: function (content) {
    var md5 = crypto.createHash('md5')
    md5.update(content)
    return md5.digest('hex')
  },

  //获取IP
  getClientIP: function (req) {
    return req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
  }
}


module.exports = until
