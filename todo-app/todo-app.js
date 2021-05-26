const todos = [{
    title:"Walk Your dog",
    completed:true
},{
    title:"Brush the carpet",
    completed:false
},{
    title:"Clean the fridge",
    completed:false
},{
    title:"Buy Milk",
    completed:false
},{
    title:"Order Food",
    completed:true
},{
    title:"Talk to Doctor",
    completed:false
},{
    title:"Read Pizza Recipe",
    completed:true
}]

const filters = {
    title: '',
    completed:null
}

// -------------------------------------------------------
// DOM Challenge:
// -------------------------------------------------------

// const paras = document.querySelectorAll("p");
// paras.forEach(function(item){
//     if(item.textContent.toLowerCase().includes("the")){
//         item.remove();
//     }
// })


// -------------------------------------------------------
// Adding to DOM Challenge:
// -------------------------------------------------------

// Printing unfinished todos line
// let noOfUnfinished = 0;
// todos.forEach(function(item){
//     if(!item.completed){
//         noOfUnfinished +=1;
//     }
// })
// const numberOfTodosLeftMessage = document.createElement("p");
// numberOfTodosLeftMessage.textContent=`You have ${noOfUnfinished} Unfinished Todos`;
// document.querySelector("#remaining-todos").appendChild(numberOfTodosLeftMessage);


// New function to create element assign text to it and then append it to a something
const addElement = function(typeOfElement, textOfElement, locationOfAppend){
    const element = document.createElement(typeOfElement);
    element.textContent = textOfElement;
    document.querySelector(locationOfAppend).appendChild(element);
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

    // Incomplete todos message
    let noOfUnfinished = 0;
    filteredTodos.forEach(function(item){
    if(!item.completed){
        noOfUnfinished +=1;
    }
    })
    const numberOfTodosLeftMessage = document.createElement("p");
    numberOfTodosLeftMessage.textContent=`You have ${noOfUnfinished} Unfinished Todos`;
    document.querySelector("#remaining-todos").innerHTML='';
    document.querySelector("#remaining-todos").appendChild(numberOfTodosLeftMessage);
    document.querySelector("#todo-div").innerHTML='';
    filteredTodos.forEach(function(item){
        addElement("p",  item.title, "#todo-div")
    })
    // Incomplete todos message ends
}

renderTodos(todos, filters);
// Button with CLICK event listner
// document.querySelector("#add-todo-button").addEventListener('click', function(){
//     console.log("Button was clicked");
// })

// Input with INPUT event listner
const inputField = document.querySelector("#input-todo");
inputField.addEventListener('input', function(e){
    // console.log(e.target.value);
    filters.title=e.target.value;
    renderTodos(todos, filters);
})

// Add Todo Form event
document.querySelector("#add-todo-form").addEventListener("submit", function(e){
    e.preventDefault();
    let firstName = e.target.elements.firstName.value;
    console.log(firstName);
    todos.push({
        title:firstName,
        completed:false
    })
    // document.querySelector("#todo-div").innerHTML='';
    // todos.forEach(function(item){
    //     addParagraph(item.title);
    // })
    renderTodos(todos, filters);
    e.target.elements.firstName.value='';
})

//checkbox event listener
document.querySelector("#completed-status-checkbox").addEventListener("change", function(e){
    filters.completed=e.target.checked;
    renderTodos(todos, filters)
})