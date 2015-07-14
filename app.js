var express = require('express');
var path = require('path');
var app = express();

app.configure(function(){


  // disable layout
  app.set("view options", {layout: false});

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.set('views', __dirname);


});
app.use(express.static('out'));
app.get('/', function (req, res) {
	res.render('index.html');
})

app.listen(3003);