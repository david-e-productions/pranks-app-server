const { Schema, model } = require("mongoose");

const stepSchema = new Schema({
  title: {
    type: String,
  },
  isDone: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  comments: [],
});

const Step = model("Step", stepSchema);

module.exports = Step;
