var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');
var ImageModel = require('../models/Image.js');

//
router.post('/image-upload', function(req, res){
  var form = new multiparty.Form({uploadDir: './public/images/'});

  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    var filesTmp = JSON.stringify(files, null, 2);
    if(err){
      console.log('parse error: ' + err);
    } else {
      var inputFile = files.image[0];
      var uploadedPath = inputFile.path;
      var dstPath = './public/files/' + inputFile.originalFilename;

      var Image = new ImageModel({
        author: req.body.author,
        url: uploadedPath
      });

      Image.save(function (err) {
        if (!err) {
          res.json({code: 0, msg: '上传成功！'})
          res.end();
        } else {

        }
      });

    }

 });
});

module.exports = router;
