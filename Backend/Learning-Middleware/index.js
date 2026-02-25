const express = require("express");
const app = express();
const port = 3000;

const user_operations = require("./user_operations");
const Protected_operations = require("./Protected_operations");

// middleware
app.use(express.json()); //parse -> json

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", (req, res) => {
  let data = req.body;
  console.log(data);

  res.json({
    message: "User Added",
    messages: "byby",
    value: data,
  });
});

app.use("/netflix", user_operations);
app.use("/amazon", Protected_operations);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
