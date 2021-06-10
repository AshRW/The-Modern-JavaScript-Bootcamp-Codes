import uuidv4 from 'uuid/v4';

let todos=[];

const loadTodos = () => {
    let todosJSON = localStorage.getItem('todoKey');
    if(todosJSON!=null){
        todos = JSON.parse(todosJSON);
    } else todos = [];
}

const getTodos = () => todos;

const saveTodos = () => {
    const todoToSaveJSON = JSON.stringify(todos)
    localStorage.setItem('todoKey', todoToSaveJSON);
}

const createTodo = (name) => {
    const newTodoName = name.trim();
        todos.push({
            title:newTodoName,
            completed:false,
            id:uuidv4()
        })
        saveTodos()
}

const removeTodo = function (todoId) {
    const todoIndex = todos.findIndex(function(item){
        return item.id === todoId;
    })
    if(todoIndex>-1){
        todos.splice(todoIndex, 1);
    }
}

const todoCompleted = function(todoId){
    const todoIndex = todos.findIndex(function(item){
        return item.id === todoId;
    })
    if (todoIndex>-1){
        if(todos[todoIndex].completed){
            todos[todoIndex].completed = false;
        }
        else {
            todos[todoIndex].completed = true;
        }
    }
}

export{
    loadTodos,
    getTodos,
    saveTodos,
    createTodo,
    removeTodo,
    todoCompleted
}