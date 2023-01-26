const router = require("express").Router();
const Step = require("../models/Step.model");
const Prank = require("../models/Prank.model");
const mongoose = require("mongoose");

//create a new step

router.post("/steps", (req, res) => {
  const { title, description, prankId } = req.body;

  Step.create({
    title,
    isDone: false,
    description,
    comments: [],
  }).then((newStep) => {
    return Prank.findByIdAndUpdate(
      prankId,
      { $push: { steps: newStep._id } },
      { new: true }
    )
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  });
});

//delete a step

router.delete("/steps/:stepId", (req, res) => {
  const { stepId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(stepId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Step.findByIdAndDelete(stepId)
    .then((deletedStep) => res.json(deletedStep))
    .catch((err) => console.log(err));
});

module.exports = router;
