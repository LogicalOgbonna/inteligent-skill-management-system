const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const QuestionSchema = new Schema({
  questions: [
    {
      question: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      question_option: [
        {
          option_value: {
            type: String,
            required: true
          },
          weight: {
            type: Number,
            required: true
          }
        }
      ]
    }
  ]
});

module.exports = Question = mongoose.model("question", QuestionSchema);
