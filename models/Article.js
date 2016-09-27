var mongodb = require('../config/config');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title : {type: String,},
    thumb : {type: String},
    content : {type: String},
    createTime : {type: Date, default: Date.now},
    author : {type: String, default: '叁木'},
    view : {type: Number, default:0},
    like : {type: Number, default:0},
    commentNum : {type: Number, default:0}
});

module.exports = mongoose.model('article', ArticleSchema);
