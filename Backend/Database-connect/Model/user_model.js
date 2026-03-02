const { Schema, model } = require("mongoose");

const MySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 5,
  },
  role: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TaskModel = model("DemoUsers", MySchema);

module.exports = TaskModel;
