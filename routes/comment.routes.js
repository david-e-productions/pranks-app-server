const router = require("express").Router();
const Prank = require("../models/Prank.model");
const Step = require("../models/Step.model");
const { isAuthenticated } = require("./../middleware/jwt.middleware.js");
const Comment = require("../models/Comment.model");
const mongoose = require("mongoose");

//create comment

router.post("/commentprank", isAuthenticated, async (req, res) => {
  const { description, prankId, user } = req.body;
  const newComment = await Comment.create({ description, user });

  Prank.findByIdAndUpdate(
    prankId,
    { $push: { comments: newComment._id } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.post("/commentstep", isAuthenticated, async (req, res) => {
  const { description, stepId, userId } = req.body;
  const newComment = await Comment.create({ description, userId });

  Step.findByIdAndUpdate(
    stepId,
    { $push: { comments: newComment._id } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

// delete comment

router.delete("/comment/:commentId", isAuthenticated, (req, res) => {
  const { commentId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Comment.findByIdAndDelete(commentId)
    .then((deletedComment) => res.json(deletedComment))
    .catch((err) => console.log(err));
});

module.exports = router;
