const puzzleElement = document.querySelector(".puzzle");
const remainingGuessElement = document.querySelector('.remaining-guesses');


const hangman1 = new Hang('CAT Man', 3);
puzzleElement.textContent = hangman1.getPuzzle();
remainingGuessElement.textContent = `You have ${hangman1.numberOfGuess} guesses remaining`;

window.addEventListener('keypress',(e)=>{
    if(hangman1.status==='playing'){
        puzzleElement.textContent= hangman1.guessChar(e.key.toString())
        remainingGuessElement.textContent = `You have ${hangman1.numberOfGuess} guesses remaining`;
    } else {
        console.log("here");
        remainingGuessElement.remove();
    }
})