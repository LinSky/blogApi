var express = require('express')
var mongoose = require("mongoose")
var ArticleInfo = require('../models/ArticleInfoSchema')
var _ = require('underscore')
var router = express.Router()

//
router.get('/articles', function(req, res){
    var query = ArticleInfo.find()
    query.populate('author')
    query.exec(function(err, doc){
      var newFilterArr = _.map(doc, function (item) {
        var username = item.toObject().author.username
        return _.extend(_.omit(item.toObject(), 'content', 'author'), {username: username})
      })

      res.json({code: 0, msg:'Success!', result: newFilterArr})
      res.end()
    })
})

//
router.post('/articles',function(req,res,next){
  var article = new ArticleInfo({
    title: req.body.title,                                            //文章标题
    author: req.body.authorId,                                        //作者
    content: req.body.content                                         //文章内容
  });

  article.save()
})


module.exports = router
