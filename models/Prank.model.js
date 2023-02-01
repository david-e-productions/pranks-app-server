const { Schema, model } = require("mongoose");

const prankSchema = new Schema({
  title: {
    type: String,
  },
  time: {
    type: Date,
  },
  place: {
    type: String,
  },
  description: {
    type: String,
  },
  prankee: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  steps: [{ type: Schema.Types.ObjectId, ref: "Step" }],
});

const Prank = model("Prank", prankSchema);

module.exports = Prank;
