const router = require("express").Router();
const Prank = require("../models/Prank.model");
const Step = require("../models/Step.model");

//update comments

router.post("/prankcomments", (req, res) => {
  const { comments, prankId } = req.body;

  Prank.findByIdAndUpdate(
    prankId,
    { $push: { comments: comments } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.post("/stepcomments", (req, res) => {
  const { comments, stepId } = req.body;

  Step.findByIdAndUpdate(
    stepId,
    { $push: { comments: comments } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;
