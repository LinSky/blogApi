var mongodb = require('../config/config')
var User = require('../models/UserSchema')
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var ImageSchema = new Schema({
    author: {type: Schema.Types.ObjectId, ref: 'User'},
    url : {type: String},
    createTime : {type: Date, default: Date.now}
});

var Image = mongoose.model('Image', ImageSchema)
module.exports = Image
