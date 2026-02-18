const express = require("express");
const app = express();
const port = 3030;

app.get("/", (req, res) => {
  res.send("Hello World! i am pankaj");
});

app.listen(port, () => {
  console.log(`Example app  of pankaj listening on port ${port}`);
});
