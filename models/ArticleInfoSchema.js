var mongodb = require('../config/config')
var mongoose = mongodb.mongoose
var Schema = mongoose.Schema

var ArticleInfoSchema = new Schema ({
  title: {type: String},                                      //文章标题
  view: {type: Number, default: 0},                           //浏览量
  createTime: {type: Date, default: Date.now},                //创建时间
  author: {type: Schema.Types.ObjectId, ref: 'User'},         //作者
  content: {type: Schema.Types.ObjectId, ref: 'Content'}      //文章内容
})

var ArticleInfo = mongoose.model('ArticleInfo', ArticleInfoSchema)
module.exports = ArticleInfo
