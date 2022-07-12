const router = require("express").Router();

const userRoutes = require("./user-routes");

router.use("/workouts", userRoutes);

module.exports = router;
