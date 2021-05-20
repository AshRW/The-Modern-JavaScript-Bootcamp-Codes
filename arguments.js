let add = function (numberOne, numberTwo) {
    return numberOne+numberTwo;    
}

console.log(add(3,5));

let scoreBoard = function (playerName = "Player", score = 0) {
    console.log(playerName);
    console.log(score);
}

scoreBoard();