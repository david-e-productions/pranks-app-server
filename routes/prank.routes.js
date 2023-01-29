const router = require("express").Router();
const mongoose = require("mongoose");
const Prank = require("../models/Prank.model");
const { isAuthenticated } = require("./../middleware/jwt.middleware.js");
const User = require("../models/User.model");

//create a new prank

router.post("/prank", isAuthenticated, async (req, res) => {
  const { title, time, place, description, prankee, userId } = req.body;

  const newPrank = await Prank.create({
    title,
    time,
    place,
    description,
    prankee,
    userId,
    comments: [],
    steps: [],
  });

  User.findByIdAndUpdate(
    userId,
    { $push: { pranks: newPrank._id } },
    { new: true }
  )
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//all the pranks

router.get("/pranks", (req, res) => {
  Prank.find()
    .populate("steps")
    .populate("comments")
    .then((allPranks) => res.json(allPranks))
    .catch((err) => console.log(err));
});

//specific prank

router.get("/prank/:prankId", (req, res) => {
  const { prankId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(prankId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Prank.findById(prankId)
    .populate("steps")
    .populate("comments")
    .then((foundPrank) => res.json(foundPrank))
    .catch((err) => console.log(err));
});

//edit a specific prank

router.put("/prank/:prankId", isAuthenticated, (req, res) => {
  const { prankId } = req.params;
  const { title, time, place, description, prankee } = req.body;

  if (!mongoose.Types.ObjectId.isValid(prankId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Prank.findByIdAndUpdate(
    prankId,
    { title, time, place, description, prankee },
    { new: true }
  )
    .then((updatedPrank) => res.json(updatedPrank))
    .catch((err) => console.log(err));
});

//find pranks of a specific user

router.get("/mypranks/:userId", isAuthenticated, (req, res) => {
  const { userId } = req.params;

  Prank.find({ userId: userId }).then((prankFound) => res.json(prankFound));
});

//delete a prank

router.delete("/prank/:prankId", isAuthenticated, (req, res) => {
  const { prankId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(prankId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Prank.findByIdAndDelete(prankId)
    .then((deletedPrank) => res.json(deletedPrank))
    .catch((err) => console.log(err));
});

module.exports = router;
