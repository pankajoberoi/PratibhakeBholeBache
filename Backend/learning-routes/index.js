const express = require("express"); //we have created instance of express
const app = express();
const port = 8321;

const user_operations = require("./Routes/user_operations");

app.use(express.json());

app.use("/netflix", user_operations);

app.listen(port, () => {
  console.log("Server running at port " + port);
});
