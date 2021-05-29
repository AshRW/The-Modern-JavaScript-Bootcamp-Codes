// New function to create element assign text to it and then append it to a something
const addElement = function(typeOfElement, textOfElement, locationOfAppend){
    const element = document.createElement(typeOfElement);
    element.textContent = textOfElement;
    document.querySelector(locationOfAppend).appendChild(element);
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

const addTodoElement = function(objOfTodo){
    const todoElement = document.createElement('div');
    
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    todoElement.appendChild(todoCheckbox);
    todoCheckbox.checked = objOfTodo.completed;
    todoCheckbox.addEventListener('change', function(e){
        // console.log(e.target.checked);
        todoCompleted(objOfTodo.id);
        saveTodosToLocalStorage(todos);
        renderTodos(todos,filters);
    })

    const todoTitle = document.createElement('span');
    todoTitle.textContent=objOfTodo.title;
    todoElement.appendChild(todoTitle);

    const todoButton = document.createElement('button');
    todoButton.textContent='X';
    todoElement.appendChild(todoButton);
    todoButton.addEventListener('click', function(){
        // console.log(objOfTodo);
        removeTodo(objOfTodo.id);
        saveTodosToLocalStorage(todos);
        renderTodos(todos,filters);
    })

    document.querySelector("#todo-div").appendChild(todoElement);
}

// New Function for Rendering todos
const renderTodos = function (arr, filters){
    const filteredTodos = arr.filter(function(item){
        if(filters.completed===true){
            return (item.title.toLowerCase().includes(filters.title.toLowerCase()) && !item.completed);
        } else {
            return item.title.toLowerCase().includes(filters.title.toLowerCase());
        }
    })
    // debugger
    // Incomplete todos message
    let noOfUnfinished = 0;
    filteredTodos.forEach(function(item){
    if(!item.completed){
        noOfUnfinished +=1;
    }
    })
    // debugger
    const numberOfTodosLeftMessage = document.createElement("p");
    numberOfTodosLeftMessage.textContent=`You have ${noOfUnfinished} Unfinished Todos`;
    document.querySelector("#remaining-todos").innerHTML='';
    document.querySelector("#remaining-todos").appendChild(numberOfTodosLeftMessage);
    // Incomplete todos message ends
    document.querySelector("#todo-div").innerHTML='';
    filteredTodos.forEach(function(item){
        // addElement("p",  item.title, "#todo-div");
        addTodoElement(item);

    })
}

const fetchFromLocalStorage = function () {
    let todosJSON = localStorage.getItem('todoKey');
    if(todosJSON!=null){
        todos = JSON.parse(todosJSON);
        renderTodos(todos, filters);
    }
}

const saveTodosToLocalStorage = function(todoToSave){
    const todoToSaveJSON = JSON.stringify(todoToSave)
    localStorage.setItem('todoKey', todoToSaveJSON);
}