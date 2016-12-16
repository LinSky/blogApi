var express = require('express');
var mongoose = require("mongoose");
var Article = require('../models/Article.js');
var router = express.Router();

//
router.get('/article/:articleId',function(req, res, next){
    var articleId = req.params.articleId

    Article.findById(articleId, function(err, article){
        if (!err) {
            res.json(article)
            res.end()
            Article.update({_id: articleId}, {view: article.view + 1}, function(){
              console.log('update success!');
            })
        } else {

        }
    })
});

module.exports = router;
