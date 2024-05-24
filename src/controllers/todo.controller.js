const TodoService = require('../services/todo.service');
const TodoRepository = require('../repositories/todo.respository');

const todoService = new TodoService(new TodoRepository());

function getController(req, res){
    const response = todoService.getAllTodos();
    return res.json({data : response});
}

function createController(req, res){
    const todoText = req.body.todoText;
    todoService.create(todoText);
    return res.json({data:"new todos created"})
}

module.exports = {
    getController,
    createController
};

