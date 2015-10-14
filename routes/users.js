var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('users base');
});

router.get('/list', function(req, res, next) {
  res.send('list users');
});

/*router.get('/^/list/(d+)$/', function(req, res, next) {
  console.log(req.params);
  res.send('number id ' + req.params[0]);
});*/

router.get('/list/:id', function (req, res) {
  res.send('id ' + req.param('id'));
});

router.get('/:id/:product', function (req, res) {
  console.log(req.params);
  res.send('params='+ JSON.stringify(req.params) +'<br>body='+ JSON.stringify(req.body));
});

router.post('/list', function (req, res) {
  var post = JSON.stringify(req.body);
  res.send('from post ' + post);
});

router.get('/list/users/access', function (req, res) {
  res.redirect(301, 'users/list/access');
});

router.get('/list/access', function (req, res) {
  res.send('access page after redirect');
});

module.exports = router;
