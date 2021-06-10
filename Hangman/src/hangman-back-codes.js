class Hang{
    constructor(word, numberOfGuess){
        this.word = word.toLowerCase().split('');
        this.numberOfGuess = numberOfGuess;
        this.guessedLetters = [];
        this.status = 'playing';
    }
    getPuzzle() {
        const returnDomElement = document.createElement('div');

        let puzzleString = '';
        this.word.forEach((item)=>{
            if(this.guessedLetters.includes(item) || item === ' '){
                puzzleString += item;
                returnDomElement.appendChild(this.createSpan(item))
            }else{
                puzzleString += '*';
                returnDomElement.appendChild(this.createSpan('*'))
            }
        })
        if(puzzleString.includes('*')){
            return returnDomElement.innerHTML;
        } else {
            this.status = 'finished';
            return `You Won the Game!`
        }
    }
    guessChar(guess) {
        if(!this.guessedLetters.includes(guess)){
            // this.guessedLetters.push(guess);
            this.guessedLetters=[...this.guessedLetters, guess];
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
    createSpan(textContent){
        const newSpan = document.createElement('span');
        newSpan.textContent=textContent;
        return newSpan
    }
}

const getPuzzle = async () => {
    const response = await fetch('https://puzzle.mead.io/puzzle', {})
    if (response.status===200){
        const data = await response.json();
        return data;
    } else {
        throw new Error('Problem fetching data');
    }
}

export {Hang as default, getPuzzle}