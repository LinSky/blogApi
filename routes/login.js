var express = require('express');
var router = express.Router();

//
router.post('/login',function(req,res,next){
    var username = req.body.username;
    var password = req.body.password;
    var code,msg;
    username == '13730856937' && password == '123456' ? code = 0 : code = 1; //0=>success, 1=>fail
    username == '13730856937' && password == '123456' ? msg='授权成功！': msg = '授权失败！';
    res.json({code: code, msg: msg, user: {username: '叁木', id: '1000001'}});
 });

module.exports = router;
