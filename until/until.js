var crypto = require('crypto')
var until = {
  //加密
  encode: function (content) {
    var md5 = crypto.createHash('md5')
    md5.update(content)
    return md5.digest('hex')
  }
}


module.exports = until
