var mongoose = require('mongoose');//引入mongoose库
mongoose.connect('mongodb://lilin:123456@127.0.0.1:27017/blog');//mongodb连接地址,blog为数据库名称,默认mongodb连接不需要密码
exports.mongoose = mongoose;//导出mongoose对象
