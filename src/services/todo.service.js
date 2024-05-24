class TodoService{
    constructor(todoRepository){
        this.todoRepository = todoRepository;
    }

    create(todoText){
      todoText = todoText.trim().toUpperCase();
      this.todoRepository.insert(todoText);
    }

    getOneTodo(id){
        return this.todoRepository.get(id);
    }

    getAllTodos(){
        return this.todoRepository.getAll();
    }
}

module.exports = TodoService;