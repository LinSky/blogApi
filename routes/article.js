var express = require('express');
var mongoose = require("mongoose");
var ArticleInfo = require('../models/ArticleInfoSchema')
var _ = require('underscore')
var router = express.Router();

//
router.get('/article/:articleId',function(req, res, next){
    var articleId = req.params.articleId
    var query = ArticleInfo.findById(articleId)
    query.populate('author')
    query.exec(function(err, doc){
      var docObject = doc.toObject()
      var username = docObject.author.username
      var resultData = _.extend(_.omit(docObject, 'author'), {username: username})
      res.json({code: 0, msg:'Success!', result: resultData})
      res.end();
    });
})

module.exports = router;
