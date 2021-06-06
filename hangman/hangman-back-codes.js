class Hang{
    constructor(word, numberOfGuess){
        this.word = word.toLowerCase().split('');
        this.numberOfGuess = numberOfGuess;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    getPuzzle() {
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
    guessChar(guess) {
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
}

const getPuzzle = async () => {
    const response = await fetch('http://puzzle.mead.io/puzzle', {})
    if (response.status===200){
        const data = await response.json();
        return data;
    } else {
        throw new Error('Problem fetching data');
    }
}
