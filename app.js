const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const desciplineRoute = require("./routes/descipline");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/phreezz", { useNewUrlParser: true })
  .then(() => console.log("Database connected succesfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", desciplineRoute);

app.listen(3000, () => console.log("App Started in localhost:3000"));
