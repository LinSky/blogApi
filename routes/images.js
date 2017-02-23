var express = require('express')
var mongoose = require("mongoose")
var Image = require('../models/Image.js')
var router = express.Router()

//
router.get('/images', function(req, res, next){
  var query = Image.find()

  query.exec (function(err, doc) {
    if (err) {

    } else {
      res.json({code: 0, msg: '成功', result: doc})
      res.end()
    }
  })
})

module.exports = router
