const router = require("express").Router();
const User = require("../../model/User");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar,
      admin: req.user.admin,
      _id: req.user._id
    });
  }
);

module.exports = router;
