var mongodb = require('../config/config')
var mongoose = mongodb.mongoose
var Schema = mongoose.Schema

var ArticleContentSchema = new Schema ({
  content: {type: String}      //文章内容
})

var ArticleContent = mongoose.model('ArticleInfo', ArticleContentSchema)
module.exports = ArticleContent
