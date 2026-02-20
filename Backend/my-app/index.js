const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World! i am pankaj");
});

app.get("/welcome", (req, res) => {
  res.send("Welcome User");
});

app.get("/employee", (req, res) => {
  res.send("Employee List");
});

app.get("/user", (req, res) => {
  res.json({
    name: "Pankaj",
    role: "Develper",
  });
});

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Aman",
    },
    {
      id: 2,
      name: "Rupa",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server up at port ${port}`);
});
