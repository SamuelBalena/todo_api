const express = require("express");
const routes = express.Router();
const TasksController = require("./app/controller/TasksController");

routes.get("/tasks", TasksController.showData);

routes.post("/tasks", TasksController.postData);

routes.put("/tasks", TasksController.putData);

routes.delete("/tasks", TasksController.deleteData);

module.exports = routes;
