const express = require("express"); //we have created instance of express
const router = express.Router();

const User = require("../Model/user_model");

router.post("/signup", async (req, res) => {
  try {
    const { name, role, salary } = req.body; //f.e
    const newUser = new User({ name, role, salary }); // map to model
    await newUser.save();
    res.status(200).json({
      success: "User Added Successfully",
      user: newUser,
    });
  } catch (err) {
    res.send("Error occured");
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.send("Error occured");
  }
});

module.exports = router;
