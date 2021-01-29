// Dependancies
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');

require('dotenv').config()

const users = require("./routes/api/users");

const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

// DB Config
const db = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(db || 'mongodb://localhost/users',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));


  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}
  
// Start the server and begin listening for client requests.
app.listen(port, () =>
  // Server log to indicate the server has started
  console.log(`Server up and running on port ${port}!`)
);
