var express = require('express')
var mongoose = require("mongoose")
var Image = require('../models/Image.js')
var _ = require('underscore')
var router = express.Router()

//
router.get('/images', function(req, res, next){
  var query = Image.find()
  query.populate('authorId')
  query.exec(function(err, doc){

    var newFilterArr = _.map(doc, function (item) {
      var username = item.toObject().authorId.username
      return _.extend(_.omit(item.toObject(), 'authorId'), {authorName: username})
    })

    res.json({code: 0, msg:'Success!', result: newFilterArr})
    res.end()
  })
})

module.exports = router
