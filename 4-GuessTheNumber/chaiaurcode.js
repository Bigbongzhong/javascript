let number = Math.round(Math.random() * 100 + 1);
const submit=document.querySelector('#subt');
const guessField = document.querySelector('#guessField');
const previousGuess = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const loOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevGues = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(guessField.value)
        console.log(guess);
        
        validateGuess(guess)
    })
}

function validateGuess(guess){
if( guess<1 && guess>100 )
    displayMessage("invalid guess")
else if(isNaN(guess)==true)
    displayMessage("guess is not a number!, guess again")
else {
    prevGues.push(guess);
if(numGuess===10){
    displayGuess(guess)
    displayMessage(`gameover, random number was ${number}`)
    endgame()
}
else{
    displayGuess(guess)
    checkGuess(guess)

}
}
}

function checkGuess(guess){
if(number!=guess){
    if(number>guess)
        displayMessage("guess higher")
    if(number<guess)
        displayMessage("guess lower")
}
else
displayMessage("correct guess you won!")
}

function displayMessage(message){
    loOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
    guessField.value =""
    previousGuess.innerText = prevGues
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
}

function endgame(){
    guessField.value=""
    guessField.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame=false
    newgame();
}

function newgame(){
    const button= document.querySelector('#newGame')
    button.addEventListener('click', (e)=>{
    number = Math.round(Math.random() * 100 + 1);
    guessField.removeAttribute('disabled', '')
    prevGues =[]
    numGuess=1
    previousGuess.innerText= "";
    remaning.innerHTML = `${11 - numGuess}`
    startOver.removeChild(p);
    playGame=true
})
}
