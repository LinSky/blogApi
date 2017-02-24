var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var fs = require('fs');
var ImageModel = require('../models/Image.js');

//
router.post('/image-upload', function(req, res){
  var form = new multiparty.Form({uploadDir: './public/uploadImages'});

  //上传完成后处理
  form.parse(req, function(err, fields, files) {
    if(err){
      console.log('parse error: ' + err);
    } else {
      var inputFile = files.image[0];
      var uploadedPath = inputFile.path;
      var Image = new ImageModel({
        authorId: fields.authorId[0],
        url: uploadedPath.substring(7)
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
