var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Legislativo' });
});

/* GET deputados page. */
router.get('/deputados', function(req,res,next) {
  res.render('deputados', { title: 'Legislativo' });
});

module.exports = router;
