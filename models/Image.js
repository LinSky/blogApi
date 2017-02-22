var mongodb = require('../config/config');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    author : {type: String},
    url : {type: String},
    createTime : {type: Date, default: Date.now}
});

module.exports = mongoose.model('image', ImageSchema);
