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
    const todoElement = document.createElement('label');
    const containerElement = document.createElement('div')
    
    const todoCheckbox = document.createElement('input');
    todoCheckbox.setAttribute('type', 'checkbox');
    containerElement.appendChild(todoCheckbox);
    todoCheckbox.checked = objOfTodo.completed;
    todoCheckbox.addEventListener('change', function(e){
        // console.log(e.target.checked);
        todoCompleted(objOfTodo.id);
        saveTodosToLocalStorage(todos);
        renderTodos(todos,filters);
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
            // addElement("p",  item.title, "#todo-div");
            addTodoElement(item);
    
        })
    } else {
        const emptyTodoMsg = document.createElement('p');
        emptyTodoMsg.textContent = 'No Todos to show';
        emptyTodoMsg.classList.add('empty-message');
        document.querySelector("#todo-div").appendChild(emptyTodoMsg);
    }
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