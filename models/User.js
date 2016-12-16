var mongodb = require('../config/config');
var mongoose = mongodb.mongoose;
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username : {type: String,},
    phone : {type: String},
    password : {type: String},
    createTime : {type: Date, default: Date.now}
});

module.exports = mongoose.model('user', UserSchema);
