const router = require("express").Router();
const mongoose = require("mongoose");
const Prank = require("../models/Prank.model");

//create a new prank

router.post("/createprank", (req, res) => {
  const { title, time, place, description, prankee } = req.body;

  Prank.create({
    title,
    time,
    place,
    description,
    prankee,
    comments: [],
    steps: [],
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//all the pranks

router.get("/pranks", (req, res) => {
  Prank.find()
    .populate("steps")
    .then((allPranks) => res.json(allPranks))
    .catch((err) => console.log(err));
});

//specific prank

router.get("/pranks/:prankId", (req, res) => {
  const { prankId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(prankId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Prank.findById(prankId)
    .populate("steps")
    .then((foundPrank) => res.json(foundPrank))
    .catch((err) => console.log(err));
});

//edit a specific prank

router.put("/pranks/:prankId", (req, res) => {
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

router.get("/mypranks", (req, res) => {
  //   console.log(req.session.currentUser)`// here the user would come from the frontend
  //  // const {username} = req.session.currentUser
  //  // const { currentUser } = req.session;

  Prank.find({ user: user }).then((prankFound) => {
    res.json(prankFound);
  });
});

//delete a prank

router.delete("/pranks/:prankId", (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(prankId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Prank.findByIdAndDelete(prankId)
    .then((deletedPrank) => res.json(deletedPrank))
    .catch((err) => console.log(err));
});

module.exports = router;
