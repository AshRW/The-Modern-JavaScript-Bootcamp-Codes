// const func1 = function(){
//     const message = 'Hello, My name chef';
//     const func2 = function(){
//         console.log(message);
//     }
//     return func2;
// }

// const returnFun = func1();
// returnFun();

const tip = (tipPercentage)=>{
    return (tipAmount) => {
        return tipAmount*tipPercentage;
    }
}

const tip10 = tip(0.10);

console.log(tip10(100))