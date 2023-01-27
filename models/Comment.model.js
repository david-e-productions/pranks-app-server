const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  description: {
    type: String,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
