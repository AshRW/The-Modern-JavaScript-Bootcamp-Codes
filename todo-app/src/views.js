import { getFilters } from "./filters";
import { getTodos, removeTodo, saveTodos, todoCompleted } from "./todos";

const addTodoElement = function(objOfTodo){
    const todoElement = document.createElement('label');
    const containerElement = document.createElement('div')
    
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    containerElement.appendChild(todoCheckbox);
    todoCheckbox.checked = objOfTodo.completed;
    todoCheckbox.addEventListener('change', function(e){
        todoCompleted(objOfTodo.id);
        saveTodos();
        renderTodos();
    })

    const todoTitle = document.createElement('span');
    todoTitle.textContent=objOfTodo.title;
    containerElement.appendChild(todoTitle);

    todoElement.classList.add('list-item');
    containerElement.classList.add('list-item__container')
    todoElement.appendChild(containerElement);

    const todoButton = document.createElement('button');
    todoButton.textContent='Remove';
    todoButton.classList.add('button', 'button--text');
    todoElement.appendChild(todoButton);
    todoButton.addEventListener('click', function(){
        removeTodo(objOfTodo.id);
        saveTodos()
        renderTodos();
    })
    document.querySelector("#todo-div").appendChild(todoElement);
}

// New Function for Rendering todos
const renderTodos = function (){
    const arr = getTodos();
    const {title, completed} = getFilters();
    const filteredTodos = arr.filter(function(item){
        if(completed===true){
            return (item.title.toLowerCase().includes(title.toLowerCase()) && !item.completed);
        } else {
            return item.title.toLowerCase().includes(title.toLowerCase());
        }
    })

    // Incomplete todos message
    let noOfUnfinished = 0;
    filteredTodos.forEach(function(item){
    if(!item.completed){
        noOfUnfinished +=1;
    }
    })

    const numberOfTodosLeftMessage = document.createElement("h3");
    numberOfTodosLeftMessage.classList.add('list-title');
    numberOfTodosLeftMessage.textContent=`You have ${noOfUnfinished} Unfinished Todos`;
    if(noOfUnfinished===1){
        numberOfTodosLeftMessage.textContent=`You have ${noOfUnfinished} Unfinished Todo`;
    } else if (noOfUnfinished === 0){
        numberOfTodosLeftMessage.textContent=`All caught up!`;
    }
    document.querySelector("#remaining-todos").innerHTML='';
    document.querySelector("#remaining-todos").appendChild(numberOfTodosLeftMessage);
    // Incomplete todos message ends
    document.querySelector("#todo-div").innerHTML='';
    if(filteredTodos.length>0){
        filteredTodos.forEach(function(item){
            addTodoElement(item);
        })
    } else {
        const emptyTodoMsg = document.createElement('p');
        emptyTodoMsg.textContent = 'No Todos to show';
        emptyTodoMsg.classList.add('empty-message');
        document.querySelector("#todo-div").appendChild(emptyTodoMsg);
    }
}

export{
    renderTodos
}