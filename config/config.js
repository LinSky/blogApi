var mongoose = require('mongoose');//引入mongoose库
mongoose.connect('mongodb://127.0.0.1:27017/myblog');//mongodb连接地址,myblog为数据库名称,默认mongodb连接不需要密码
exports.mongoose = mongoose;//导出mongoose对象
