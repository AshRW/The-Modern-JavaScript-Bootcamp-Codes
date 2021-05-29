let todos=[];

const filters = {
    title: '',
    completed:false
}

fetchFromLocalStorage();

const renderTodosGeneralized = function () {
    renderTodos(todos, filters);
}

// Input with INPUT event listner
document.querySelector("#input-todo").addEventListener('input', function(e){
    filters.title=e.target.value;
    renderTodosGeneralized();
})

// Add Todo Form event
document.querySelector("#add-todo-form").addEventListener("submit", function(e){
    e.preventDefault();
    let firstName = e.target.elements.firstName.value;
    console.log(firstName);
    todos.push({
        title:firstName,
        completed:false,
        id:uuidv4()
    })
    localStorage.clear();
    saveTodosToLocalStorage(todos);
    renderTodosGeneralized();
    e.target.elements.firstName.value='';
})

//checkbox event listener
document.querySelector("#completed-status-checkbox").addEventListener("change", function(e){
    filters.completed=e.target.checked;
    renderTodosGeneralized();
})