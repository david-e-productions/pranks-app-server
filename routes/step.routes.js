const router = require("express").Router();
const Step = require("../models/Step.model");
const Prank = require("../models/Prank.model");
const mongoose = require("mongoose");
const { isAuthenticated } = require("./../middleware/jwt.middleware.js");

//create a new step

router.post("/step", isAuthenticated, async (req, res) => {
  const { title, description, prankId } = req.body;

  const newStep = await Step.create({
    title,
    isDone: false,
    description,
    comments: [],
  });

  Prank.findByIdAndUpdate(
    prankId,
    { $push: { steps: newStep._id } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//all the steps

router.get("/steps", (req, res) => {
  Step.find()
    .populate("comments")
    .then((allSteps) => res.json(allSteps))
    .catch((err) => console.log(err));
});

//specific step

router.get("/step/:stepId", (req, res) => {
  const { stepId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(stepId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Step.findById(stepId)
    .populate("comments")
    .then((foundStep) => res.json(foundStep))
    .catch((err) => console.log(err));
});

//edit a specific step

router.put("/step/:stepId", isAuthenticated, (req, res) => {
  const { stepId } = req.params;
  const { title, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(stepId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Step.findByIdAndUpdate(stepId, { title, description }, { new: true })
    .then((updatedPrank) => res.json(updatedPrank))
    .catch((err) => console.log(err));
});

//delete a step

router.delete("/step/:stepId", isAuthenticated, (req, res) => {
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
