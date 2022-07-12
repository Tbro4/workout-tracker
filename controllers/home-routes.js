// nees "/stats", "/exercise", "/exercise?""

const router = require("express").Router();
const path = require("path");

//loads localhost:3000/exercise (Add Your Exercise)
router.get("/exercise", async (req, res) => {
  try {
    console.log("New workout");
    res.sendFile(path.join(__dirname + "../../public/exercise.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
