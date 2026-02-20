const express = require("express"); //we have created instance of express
const app = express();
const port = 8321;

// CRUD

app.get("/", (req, res) => {
  res.json([
    { id: 1, role: "Developer" },
    { id: 2, role: "Tester" },
  ]);
});

app.post("/signup", (req, res) => {
  res.send("User Signed Up");
});

app.get("/user", (req, res) => {
  res.send("User Details");
});

app.put("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Edit user ${userId}`);
});

app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Deleted User ${userId}`);
});

app.listen(port, () => {
  console.log("Server running at port " + port);
});
