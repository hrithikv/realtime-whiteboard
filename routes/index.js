var express = require('express');
var router = express.Router();
var monk = require('monk');
var app = require('../app');

router.get('/', function(req, res) {
  console.log(req.cookies['connect.sid']);
  res.render('index', { title: 'Realtime Whiteboard + Chat', name: "Hrithik" });
});

module.exports = router;
