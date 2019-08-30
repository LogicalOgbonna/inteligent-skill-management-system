const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./model/User");
const bcrypt = require("bcryptjs");

const passport = require("passport");
const dotenv = require("dotenv");

dotenv.config();

const desciplineRoute = require("./routes/api/descipline");
const usersRoute = require("./routes/api/users");
const questionRoute = require("./routes/api/questions");
const profileRoute = require("./routes/api/profile");

const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/descipline", desciplineRoute);
app.use("/api/users", usersRoute);
app.use("/api/questions", questionRoute);
app.use("/api/profile", profileRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("view/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(process.env.MongoDbURI, { useNewUrlParser: true })
  .then(() => {
    User.find({ email: "admin@example.com" }).then(user => {
      if (!user.length) {
        const user = new User({
          admin: true,
          name: "admin",
          email: "admin@example.com",
          password: "admin-secret",
          avatar:
            "//www.gravatar.com/avatar/f620f4647fb816073c9152a284245e64?s=200&r=pg&d=mm"
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then(() => {
                app.listen(5000, () =>
                  console.log("App Started in localhost:5000")
                );
                console.log("Admin Created");
              })
              .catch(err => console.log(err));
          });
        });
      } else {
        app.listen(5000, () => console.log("App Started in localhost:5000"));
      }
    });
    console.log("Database connected succesfully");
  })
  .catch(err => console.log(err));
