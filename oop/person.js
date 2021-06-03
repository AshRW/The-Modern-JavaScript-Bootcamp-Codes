class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getBio(){
        return `${this.firstName} is ${this.age} years old`;
    }
    set fullName(value){
        const name = value.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
    }
    get fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

class Student extends Person{
    constructor(firstName, lastName, age, grade){
        super(firstName, lastName, age);
        this.grade=grade;
    }
    getBio(){
        let word = this.grade<75 ? 'Failing' : 'Passing'
        return `${this.firstName} is ${word} the class`;
    }
    updateGrade(upgradeByValue){
        this.grade += upgradeByValue;
    }
}

const anu = new Person('Anurag', "W", 23);
anu.fullName="Ash Cash";
console.log(anu.fullName);
const studentAnu = new Student('Android', 'Wank', 23,70);
console.log(anu.getBio());
console.log(studentAnu.getBio());
studentAnu.updateGrade(5);
console.log(studentAnu.getBio());