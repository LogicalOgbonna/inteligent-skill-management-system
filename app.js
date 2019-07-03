const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const desciplineRoute = require("./routes/api/descipline");
const usersRoute = require("./routes/api/users");
const questionRoute = require("./routes/api/questions");

const app = express();

mongoose
  .connect(process.env.MongoDbURI, { useNewUrlParser: true })
  .then(() => console.log("Database connected succesfully"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/descipline", desciplineRoute);
app.use("/api/users", usersRoute);
app.use("/api/questions", questionRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("view/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "view", "build", "index.html"));
  });
}

app.listen(3000, () => console.log("App Started in localhost:3000"));
