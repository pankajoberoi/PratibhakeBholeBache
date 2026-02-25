const express = require("express"); //we have created instance of express
const router = express.Router();

function isAdmin(req, res, next) {
  let data = req.body;

  if (data.role == "admin") {
    next();
  } else {
    res.send("Access denied");
  }
}

// router.use(isAdmin);

router.get("/admin", isAdmin, (req, res) => {
  res.send("Navigate to admn page");
});

router.get("/student", (req, res) => {
  res.send("Navigate to student");
});

module.exports = router;
