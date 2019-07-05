const router = require("express").Router();
const Descipline = require("../../model/Descipline");
const passport = require("passport");
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.user.admin) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      const { descipline } = req.body;
      console.log(descipline);
      let newDescipline = new Descipline();
      newDescipline.descipline = req.body;
      newDescipline
        .save()
        .then(data => res.json(data))
        .catch(err => res.json(err));
    }
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Descipline.find({})
      .then(descipline => res.json(descipline))
      .catch(err => res.json(err));
  }
);
module.exports = router;
