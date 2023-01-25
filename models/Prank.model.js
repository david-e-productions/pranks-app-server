const { Schema, model } = require("mongoose");


const prankSchema = new Schema({
    time: {
      type: Date,
    },
    place: {
        type: String,
    },
    description: {
        type: String
    },
    prankee: {
        type: String
    },
    comments: [],
    steps: [{ type: Schema.Types.ObjectId, ref: 'Step' }]

  })

  const Prank = model("Prank", prankSchema);

module.exports = Prank;
