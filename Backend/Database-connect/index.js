const express = require("express");
const connectDB = require("./db");
const data_operations = require("./Routes/Data_operations");
const app = express();
const port = 3000;

//MiddleWare
app.use(express.json());

//Connected to DB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/amazon", data_operations);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
