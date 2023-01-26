const router = require("express").Router();
const Step = require("../models/Step.model");
const Prank = require("../models/Prank.model");

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

module.exports = router;
