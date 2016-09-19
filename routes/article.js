var express = require('express');
var mongoose = require("mongoose");
var Article = require('../models/Article.js');
var router = express.Router();

//
router.get('/article/:articleId',function(req, res, next){
    return Article.findById(req.params.articleId, function(err, article){
        if (!err) {
            return res.send(article);
        } else {
            res.statusCode = 500;
            log.error('Internal error(%d): %s',res.statusCode,err.message);
            return res.send({ error: 'Server error' });
        }
    })
});

module.exports = router;
