let name;
console.log(name); //prints undefined

let printer = function (number) {
    console.log(number);
}

printer(); // prints undefined

let result= printer(5);
console.log(result);

let newNumber = 37;
newNumber=undefined; //leave undefined for natural programming 
newNumber=null; //do null for explicitely clearing out the variable
console.log(newNumber);