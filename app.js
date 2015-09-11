var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: false }))

app.set('port', (process.env.PORT || 3000));

// Add CORS support
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var server = app.listen(app.get('port'), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, app.get('port'));
});