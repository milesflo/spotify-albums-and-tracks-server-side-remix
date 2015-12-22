var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
// Your Server Code Here

app.get('/search/:id', function(req,res) {
	res.render("search.ejs");
});

app.get('/search/', function(req,res) {
	res.render("search.ejs");
});

app.get("/", function(req,res) {
	res.redirect("/search");
})

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server up and listening on', port);
});