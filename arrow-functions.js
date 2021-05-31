// Arrow Function:
const sq = (number) => {
    return number*number;
}

// Arrow Function with short-hand
const square = (num)=>num*num;

const people = [{
    name:"Anurag",
    age:23
},{
    name:"Ross",
    age:22
},{
    name:"West",
    age:34
}]

const peopleUnder30 = people.filter((item)=> item.age<30);
console.log(peopleUnder30);

const findAge22 = people.find((item)=> item.age === 22);
console.log(findAge22);

console.log(sq(5));
console.log(square(5));