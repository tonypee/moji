var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts');

app.use(express.static('public'));
app.use(expressLayouts);

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: 'The index page!' })
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Structure Solutions app listening on port: ', app.get('port'));
});
