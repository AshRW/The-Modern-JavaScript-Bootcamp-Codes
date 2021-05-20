let add = function (numberOne, numberTwo) {
    let sum = numberOne+numberTwo;
    if(sum<0){
        console.log("Number is below 0 on the number scale");
    }
    return sum;
}

console.log(add(10, 1));