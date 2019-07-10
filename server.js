var express = require("express");
var path = require ("path");

var app = express();
var PORT = process.env.PORT|| 8080;

app.use(express.static(path.join(__dirname, './app/public')));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add the application routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });