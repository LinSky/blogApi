var mongodb = require('../config/config');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title : {type: String },
    thumb : {type: String},
    content : {type: String},
    createTime : {type: Date},
    author : { type: String}
});

module.exports = mongoose.model('article', ArticleSchema);
