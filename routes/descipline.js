const router = require("express").Router();
const Descipline = require("../model/Descipline");

router.post("/descipline", (req, res) => {
  const { descipline } = req.body;
  let newDescipline = new Descipline();
  newDescipline.descipline = descipline;
  newDescipline
    .save()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

router.get("/descipline", (req, res) => {
  Descipline.find({})
    .then(descipline => res.json(descipline))
    .catch(err => res.json(err));
});
module.exports = router;
