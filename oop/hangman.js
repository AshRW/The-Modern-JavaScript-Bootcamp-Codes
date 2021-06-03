const Hang = function (word, numberOfGuess) {
    this.word = word.toLowerCase().split('');
    this.numberOfGuess = numberOfGuess;
    this.guessedLetters = [];
}

Hang.prototype.getPuzzle = function () {
    let puzzleString = '';
    this.word.forEach((item)=>{
        if(this.guessedLetters.includes(item) || item === ' '){
            puzzleString += item;
        }else{
            puzzleString += '*';
        }
    })
    return puzzleString;
}
const hangman1 = new Hang('CAT', 3);
const hangman2 = new Hang('car battery', 7);

console.log(hangman2.getPuzzle());