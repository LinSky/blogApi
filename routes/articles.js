var express = require('express');
var mongoose = require("mongoose");
var Article = require('../models/Article.js');
var router = express.Router();

//
router.get('/articles',function(req,res){
    var query = Article.find({});
    query.skip(0);
    //query.limit(4);
    query.exec(function(err,rs){
        if(err){
            res.send(err);
        }else{
            //计算数据总数
            query.find(function(err,result){
                res.json({code: 0, result: result});
                res.end();
            });

        }
    });

    // return Article.find(function (err, articles) {
    //        if (!err) {
    //            return res.send(articles);
    //        } else {
    //            res.statusCode = 500;
    //            log.error('Internal error(%d): %s',res.statusCode,err.message);
    //            return res.send({ error: 'Server error' });
    //        }
    //    });
});

//
router.post('/articles',function(req,res,next){
    var article = new Article({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        authorId: req.body.authorId
      });

      article.save(function (err) {
        if (!err) {
          return res.send({ status: 'OK', article:article });
        } else {

        }
      });
  });


module.exports = router;
