import { setFilters } from "./filters";
import { createTodo, loadTodos } from "./todos";
import { renderTodos } from './views';

loadTodos();
renderTodos();

// Input with INPUT event listner
document.querySelector("#input-todo").addEventListener('input', function(e){
    setFilters({
        title:e.target.value
    })
    renderTodos();
})

// Add Todo Form event
document.querySelector("#add-todo-form").addEventListener("submit", function(e){
    e.preventDefault();
    let firstName = e.target.elements.firstName.value;
    if(firstName.length!=0){
        createTodo(firstName);
        renderTodos();
        e.target.elements.firstName.value='';
    } else {
        console.log("please provide a name for the task");
    }
})

//checkbox event listener
document.querySelector("#completed-status-checkbox").addEventListener("change", function(e){
    setFilters({
        completed:e.target.checked
    })
    renderTodos();
})

window.addEventListener('storage',(e)=>{
    if(e.key==='todoKey'){
        renderTodos();
    }
})