const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// All cors
app.use(cors());

// Import Routes
const MAIN_ROUTES = require("./routes/main");
// Add Routes
app.use("", MAIN_ROUTES);
module.exports = app;
