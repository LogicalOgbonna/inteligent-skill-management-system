const express = require("express");
const router = express.Router();
const passport = require("passport");

//Load Question Model
const Question = require("../../model/Questions");

// @route   GET api/questions
// @desc    Get All Questions
// @access  Public
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // res.json("hey");
    Question.find({}).then(questions => {
      if (questions.length) {
        return res.json({ message: "All Question", questions });
      } else {
        return res
          .status(400)
          .json({ message: "No Question for You", data: null });
      }
    });
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.user.admin) {
      return res.status(401).json({ message: "Unauthorized" });
    } else {
      Question.find({}).then(questions => {
        const newQuestion = new Question();

        newQuestion.questions = req.body;
        newQuestion
          .save()
          .then(data =>
            res.json({ message: "Questions Added Successfully", data })
          )
          .catch(err => res.json(err));
      });
    }
  }
);
module.exports = router;
