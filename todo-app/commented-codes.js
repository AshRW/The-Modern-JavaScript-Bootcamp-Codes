// const todos = [{
//     title:"Walk Your dog",
//     completed:true
// },{
//     title:"Brush the carpet",
//     completed:false
// },{
//     title:"Clean the fridge",
//     completed:false
// },{
//     title:"Buy Milk",
//     completed:false
// },{
//     title:"Order Food",
//     completed:true
// },{
//     title:"Talk to Doctor",
//     completed:false
// },{
//     title:"Read Pizza Recipe",
//     completed:true
// }]

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

// Button with CLICK event listner
// document.querySelector("#add-todo-button").addEventListener('click', function(){
//     console.log("Button was clicked");
// })
