const express = require("express");
const bodyParser = require("body-parser");
// mongoose
const mongoose = require("mongoose");
// path
const path = require("path");
// create express app
const app = express();

// Register Handlebars view engine
const exphbs = require("express-handlebars");

// config db
const database = require("config/db");

app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    defaultLayout: __dirname + "/views/layouts/layout"
  })
);

// Use Handlebars view engine
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views/");

app.use(express.static(path.join(__dirname, "/public/")));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Configuring the database
// const dbConfig = require("./config/db.config.js");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(
    database.db,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

// define a simple route

// BACK END
require("./routes/article.route.js")(app);

// listen for requests
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
