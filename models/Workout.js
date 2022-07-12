const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now(),
    },

    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Please enter an exercise type",
        },

        name: {
          type: String,
          trim: true,
          required: "Please enter an exercise name",
        },

        duration: {
          type: Number,
          required: "Please enter an exercise duration (in minutes)",
        },

        weight: {
          type: Number,
          default: 0,
        },

        reps: {
          type: Number,
          default: 0,
        },

        sets: {
          type: Number,
          default: 0,
        },

        distance: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
