const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/capgemini", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
