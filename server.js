// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const timeRouter = require('./routes/routes');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
//so that my API is remotely testable
var cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//listening to all API related routes
//mounting our router on middleware
app.use('/api', timeRouter);

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
