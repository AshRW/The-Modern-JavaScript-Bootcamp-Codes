const puzzleElement = document.querySelector(".puzzle");
const remainingGuessElement = document.querySelector('.remaining-guesses');
let hangman1;


const startGame = async ()=>{
    const puzzleWord = await getPuzzle();
    const brokenPuzzleWord = puzzleWord.puzzle.split('');
    console.log(puzzleWord)
    hangman1 = new Hang(puzzleWord.puzzle, 5);
    puzzleElement.innerHTML='';
    puzzleElement.innerHTML=hangman1.getPuzzle();
    // debugger
    // brokenPuzzleWord.forEach(item=>{
    //     const newElement = document.createElement('span');
    //     newElement.textContent=item;
    //     puzzleElement.appendChild(newElement);
    // })
    // puzzleElement.textContent = hangman1.getPuzzle();
    remainingGuessElement.textContent = `You have ${hangman1.numberOfGuess} guesses remaining`;
}

startGame();

document.querySelector('#reset').addEventListener('click', (e)=>{
    startGame();
})

window.addEventListener('keypress',(e)=>{
    if(hangman1.status==='playing'){
        puzzleElement.innerHTML= hangman1.guessChar(e.key.toString());
        remainingGuessElement.textContent = `You have ${hangman1.numberOfGuess} guesses remaining`;
    } else {
        console.log("here");
        remainingGuessElement.remove();
    }
})
