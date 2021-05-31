const car = {
    color:'Yellow',
    model:'Model Y',
    getSummary: function () {
        return `This car is ${this.color} colored and its model name is ${this.model}`;
    }
}
console.log(car.getSummary());

// Wont work as arrow functions can't access the 'this.' keyword
const car2 = {
    color:'Yellow',
    model:'Model Y',
    getSummary: ()=> {
        return `This car is ${this.color} colored and its model name is ${this.model}`;
    }
}
console.log(car2.getSummary());

// This is a new way of adding methods to a JavaScript object 
const car3 = {
    color:'Yellow',
    getSummary() {
        return `This car is ${this.color} colored and its model name is ${this.model}`;
    },
    model:'Model Y'
}
console.log(car3.getSummary());