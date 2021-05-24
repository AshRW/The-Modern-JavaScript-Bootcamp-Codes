const todo = ["Walk your dog", "Brush the carpet", "Clean the fridge", "Buy Milk", "Order Food"];


//-------------------------------------------
// Previous challenges:
//-------------------------------------------


// console.log(`You have ${todo.length} tasks to do today`);
// console.log(todo[0]);
// console.log(todo[todo.length-2]);
// todo.splice(2,1);
// todo.push("Go to the doc");
// todo.shift();

// todo.forEach(function (item, index) {
//     console.log(`${index+1}. ${item}`);
// })

// for(let index=0;index<todo.length;index++){
//     console.log(`${index+1}. ${todo[index]}`);
// }

//-------------------------------------------
// Array Searching 2:
//-------------------------------------------

const todo2 = [{
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

const deleteTodo =function (array, title) {
    const indexToDelete=array.findIndex(function (item) {
        return item.title.toLowerCase()===title.toLowerCase();
    })
    if(indexToDelete>-1)
    todo2.splice(indexToDelete, 1);
}

const displayTodos = function (array) {
    array.forEach(function (item, index) {
        console.log(`${index+1}. ${item.title} - ${item.completed}`)
    })
}

// displayTodos(todo2);
// deleteTodo(todo2, "buy milk");
displayTodos(todo2);

//-------------------------------------------
// Filtering Arrays:
//-------------------------------------------

const getIncompleteTodos = function (todos) {
    return todos.filter(function (item) {
        return !item.completed
    })
}

// console.log(getIncompleteTodos(todo2))

//-------------------------------------------
// Sorting Arrays:
//-------------------------------------------

const sortTodos = function(array){
    array.sort(function(a,b){
        if(a.completed === false && b.completed===true){
            return -1;
        } else if (b.completed===false && a.completed===true){
            return 1;
        }
        else {return 0;}
    })
}

sortTodos(todo2);
console.log(todo2);