var express = require('express');
var router = express.Router();

/* Get 방식 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Eaa' });
});

router.get('/test', function(req,res,next) {
  res.render('test', {title: 'test'});
});

router.get('/string', function(req, res, next) {
  res.render('string', {"title":"메모장", "message" : "Welcome to 메모장"});
});

module.exports = router;
