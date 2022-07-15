// nees "/stats", "/exercise", "/exercise?""

const router = require("express").Router();
const path = require("path");

//loads localhost:3000/exercise (Add Your Exercise)
router.get("/exercise", async (req, res) => {
  console.log("/exercise route hit");
  try {
    res.sendFile(path.join(__dirname + "../../public/exercise.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/stats", async (req, res) => {
  console.log("/stats route hit");
  try {
    res.sendFile(path.join(__dirname + "../../public/stats.html"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
