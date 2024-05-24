const express = require("express");
const todoController = require("../../controllers/todo.controller");

const todoRouter = express.Router();

todoRouter.get('/', todoController.getController);
todoRouter.post('/', todoController.createController);

module.exports = todoRouter;