
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
//app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT, function() {
  console.log("Listening at %s", PORT);
});

//used to test res.send
// app.get('/', function (req, res) {
//         res.send('Hello World');
// });
//connection.end();