var mongodb = require('../config/config')
var mongoose = mongodb.mongoose
var Schema = mongoose.Schema

var UserSchema = new Schema ({
  content: {type: String}      //文章内容
})

var User = mongoose.model('User', UserSchema)
module.exports = User
