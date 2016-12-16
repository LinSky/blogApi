var express = require('express');
var mongoose = require("mongoose");
var User = require('../models/User.js');
var until = require('../until/until.js');
var router = express.Router();

//
router.post('/register',function(req,res,next){

  var username = req.body.username,
      password = req.body.password,
      phone    = req.body.phone;

  var msg = '',
      code = 0;

  var query = User.find({phone: phone});
  query.exec(function(err,rs){
      if(err){
          res.send(err);
      }else{
          query.find(function(err,result){
              console.log(result);
              if (result.length > 0) {
                  msg = '该手机号码已注册！'
                  code = 1
                  res.json({code: code, msg: msg})
                  res.end();
              } else {
                var user = new User({
                    username: username,
                    password: until.encode(password),
                    phone: phone
                  });

                  user.save(function (err) {
                    if (!err) {
                      msg = '恭喜您，注册成功！'
                      console.log(msg);
                    } else {
                      code = 1
                      msg = '注册失败，请稍后重试！'
                    }
                    res.json({code: code, msg: msg})
                    res.end();
                  });
              }
          });
      }
  });
 });

module.exports = router;
