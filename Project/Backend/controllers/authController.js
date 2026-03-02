const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.json({ msg: "User Already Exits" });
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(String(password), saltRounds);
      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save();
      res.json({ msg: "User Registered Successfully" });
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user)
      return res
        .send(400)
        .json({ msg: "Invalid Credentails Email doesnt exits" });

    const isMatch = await bcrypt.compare(String(password), user.password);

    if (isMatch) {
      res.send("Login successful");
    } else {
      res.status(400).send("Invalid Password");
    }

    const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
