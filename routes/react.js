var express = require('express');
var router = express.Router();
var React = require('react');
ReactApp = React.createFactory(require('../app/components/ReactApp'));

router.get('/', function (req, res, next) {
  try {
    var reactHtml = React.renderToString(ReactApp({}));
    res.render('react', {reactApp: reactHtml});
  } catch (e) {
    console.error('/react', e);
    throw e;
  }
});

module.exports = router;
