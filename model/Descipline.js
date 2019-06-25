const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesciplineSchema = new Schema({
  descipline: {
    name: {
      type: String,
      required: true
    },
    fields: [
      {
        name: { type: String },
        skills: { type: String },
        description: { type: String },
        link: { type: String }
      }
    ]
  }
});

module.exports = Descipline = mongoose.model("desciplines", DesciplineSchema);
