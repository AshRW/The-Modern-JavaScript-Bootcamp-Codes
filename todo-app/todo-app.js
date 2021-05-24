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
    completed:false
}]

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
let noOfUnfinished = 0;
todos.forEach(function(item){
    if(!item.completed){
        noOfUnfinished +=1;
    }
})
const numberOfTodosLeftMessage = document.createElement("p");
numberOfTodosLeftMessage.textContent=`You have ${noOfUnfinished} Unfinished Todos`;
document.querySelector("body").appendChild(numberOfTodosLeftMessage);

const addParagraph = function(textToAdd){
    const newParagraph = document.createElement("p");
    newParagraph.textContent=textToAdd;
    document.querySelector("body").appendChild(newParagraph);
}

todos.forEach(function(item){
    addParagraph(item.title);
})

document.querySelector("#add-todo-button").addEventListener('click', function(){
    console.log("Button was clicked");
})