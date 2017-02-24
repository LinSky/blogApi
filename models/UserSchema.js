var mongodb = require('../config/config')
var mongoose = mongodb.mongoose
var Schema = mongoose.Schema

var UserSchema = new Schema ({
  username: {type: String},                           //用户名
  password: {type: String},                           //密码
  phone: {type: String},                              //手机号
  createTime: {type: Date, default: Date.now}         //注册时间
})

var User = mongoose.model('User', UserSchema)
module.exports = User
