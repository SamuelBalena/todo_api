const mongoose = require("mongoose");

const TasksSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  description: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Tasks", TasksSchema);
