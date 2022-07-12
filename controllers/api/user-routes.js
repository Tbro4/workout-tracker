// need "/", "/range"

const router = require("express").Router();
const db = require("../../models");

// localhost:3000/api/workouts (getLastWorkout)
router.get("/", (req, res) => {
  console.log("Getting last workout");
  db.Workout.find({})
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
