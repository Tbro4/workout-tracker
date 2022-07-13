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
router.post("/", async (req, res) => {
  console.log(req.body);
  console.log("creating Workout");
  const day = new Date(new Date().setDate(new Date().getDate()));
  await db.Workout.collection.insertOne({ day }, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send(response);
    }
  });
});

// localhost:3000/api/workouts (addExercise)
router.put("/:id", async (req, res) => {
  console.log("adding exercise");
  console.log(req.body);
  console.log(req.params.id);
  await db.Workout.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

module.exports = router;
