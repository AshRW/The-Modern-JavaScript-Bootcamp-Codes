const puzzleElement = document.querySelector(".puzzle");
const remainingGuessElement = document.querySelector('.remaining-guesses');
let hangman1;

// getPuzzle().then((success)=>{
// console.log(success.puzzle);
// }).catch((err)=>{
//     console.log(err);
// })

const startGame = async ()=>{
    const puzzleWord = await getPuzzle();
    console.log(puzzleWord)
    hangman1 = new Hang(puzzleWord.puzzle, 5);
    puzzleElement.textContent='';
    puzzleElement.textContent = hangman1.getPuzzle();
    remainingGuessElement.textContent = `You have ${hangman1.numberOfGuess} guesses remaining`;
}

startGame();

document.querySelector('#reset').addEventListener('click', (e)=>{
    startGame();
})


// hangman1 = new Hang('Cat', 3);



window.addEventListener('keypress',(e)=>{
    if(hangman1.status==='playing'){
        puzzleElement.textContent= hangman1.guessChar(e.key.toString())
        remainingGuessElement.textContent = `You have ${hangman1.numberOfGuess} guesses remaining`;
    } else {
        console.log("here");
        remainingGuessElement.remove();
    }
})
