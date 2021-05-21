let guessTheNumber = function (num) {
    let min=1;let max=5;
    let random = Math.floor(Math.random()*(max-min+1))+min;
    return random===num;
}

console.log(guessTheNumber(2));