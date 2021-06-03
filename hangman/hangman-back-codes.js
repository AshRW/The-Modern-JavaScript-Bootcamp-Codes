const Hang = function (word, numberOfGuess) {
    this.word = word.toLowerCase().split('');
    this.numberOfGuess = numberOfGuess;
    this.guessedLetters = [];
    this.status = 'playing';
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
    if(puzzleString.includes('*')){
        return puzzleString;
    } else {
        this.status = 'finished';
        return `You Won the Game!`
    }
}

Hang.prototype.guessChar = function (guess) {
    if(!this.guessedLetters.includes(guess)){
        this.guessedLetters.push(guess);
        if(this.word.includes(guess)){    
            return this.getPuzzle();
        } else {
            if(this.numberOfGuess>1){
                this.numberOfGuess -= 1;
                return this.getPuzzle();
            } else {
                this.status='failed';
                return `You lost the game`
            }
        }
    } else {
        return this.getPuzzle();
    }
}

// Hang.prototype.statusCheck = function () {
//     if(this.numberOfGuess<=0){
//         this.status='failed'
//     } else {
//         this.status='playing';
//     }
// }