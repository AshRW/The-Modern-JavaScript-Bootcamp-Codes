const age = 21;
let bouncerSays;

// if(age>= 18){
//     bouncerSays="You can enter the club";
// } else {
//     bouncerSays="You can't enter this club";
// }

// bouncerSays = age>=18 ? "You can enter the club" : "You can't enter this club";

const func1 = ()=>{
    return "You can enter the club";
}
const func2 = ()=>{
    return "You can't enter this club";
}
bouncerSays=age>=18 ? func1():func2();
console.log(bouncerSays);


const team = ['Musa', 'Patel', 'Jadeja', 'Bittu', 'Mama'];

console.log(team.length<=4 ? `${team.length} people on the team` : 'Too many players on the team');