var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var axios = require("axios");
var cheerio = require("cheerio");


// Require all models
var article = require("./models/headline");
var index = require("./models/index");
var note = require("./models/note");
require = require(ro)

var PORT = 3000;

// Initialize Express
var app = express();
var exphbs = require("express-handlebars");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// Routes

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
