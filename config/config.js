var mongoose = require('mongoose');//引入mongoose库
mongoose.connect('mongodb://121.40.114.238:27017/myblog');//mongodb连接地址,demo为数据库名称,默认mongodb连接不需要密码
exports.mongoose = mongoose;//导出mongoose对象
