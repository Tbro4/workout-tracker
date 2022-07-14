const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },

    exercises: [{}],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  let total = 0;
  for (i = 0; i < this.exercises.length; i++) {
    let durLen = this.exercises[i].duration;

    total += durLen;
  }
  return total;
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
