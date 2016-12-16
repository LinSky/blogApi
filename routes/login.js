var express = require('express');
var User = require('../models/User.js');
var until = require('../until/until.js');
var router = express.Router();

//
router.post('/login',function(req,res,next){
    var phone = req.body.phone;
    var password = req.body.password;

    var code = 0,
        msg = '登录成功！';
        user = {}

    var query = User.find({phone: phone});
    query.exec(function(err,rs){
        if(err){
            res.josn({code: 1, msg: '登录出现错误！'})
            res.end()
        }else{
            query.find(function(err,result){
                console.log(result);
                if (result.length === 0) {
                    code = 1
                    msg = '该账号不存在！'
                } else {
                    if (until.encode(password) !== result[0].password) {
                        code = 1
                        msg = '密码错误，请重试！'
                    } else {
                        user.username = result[0].username
                        user.id = result[0]._id
                    }
                }
                res.json({code: code, msg: msg, user: user})
                res.end()
            });
        }
    });
 });

module.exports = router;
