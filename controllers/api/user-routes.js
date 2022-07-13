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

// localhost:3000/api/workouts (createWorkout)
router.post("/", (req, res) => {
  console.log("creating Workout");
  db.Workout.insert(req.body);
});

// localhost:3000/api/workouts (addExercise)
router.put("/:id", async (req, res) => {
  console.log("adding exercise");
  console.log(req.body);
  console.log(req.params.id);
  await db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  );
});

module.exports = router;
