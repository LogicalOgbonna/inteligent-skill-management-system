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

// Get Descipline For a User
router.get("/:descipline", (req, res, next) => {
  const desciplineCheck = req.params.descipline.replace("_", " ");
  Descipline.find({})
    .then(descipline => {
      const sendDescipline = [];
      for (let i = 0; i < descipline.length; i++) {
        if (descipline[i].descipline.name === desciplineCheck) {
          sendDescipline.push(descipline[i].descipline);
        }
      }
      res.json(sendDescipline);
    })
    .catch(err => res.json(err));
});
module.exports = router;
