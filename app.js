function getComputerChoice() {
    computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    const wrongChoice = 'Invalid input. Type rock, paper, or scissors as an input.'
    if (playerSelection == computerSelection) {
        resultString.textContent = `Tie! Both selected ${playerSelection}`
        console.log(`Tie! Both selected ${playerSelection}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || ((playerSelection == 'scissors' && computerSelection == 'paper'))) {
        resultString.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return winPts += 1;
    } else {
        resultString.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return lossPts += 1;
    }
    resultContainer.appendChild(resultString);
}

function updateScore(w, l) {
    // function to update the textContent for the #wins and #losses id in the document
}

function gameFive() {
    let scoreMessage = '';
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playerSelection == 'bad') {
            i--;
        }
    }
    (score > 0) ? scoreMessage = 'You win! Play again?' :
    (score == 0) ? scoreMessage = 'Tie game! Play again?' : 
    scoreMessage = 'You lose! Play again?';
    if (confirm(scoreMessage)) {
        gameFive();
    } else {
        console.log('Game ended');
        return;
    }
}
function gameOne() {
    let scoreMessage = '';
    for (let i = 0; i < 1; i++) {
        playRound();
        if (playerSelection == 'bad') {
            i--;
        }
    }
    (score > 0) ? scoreMessage = 'You win! Play again?' :
    (score == 0) ? scoreMessage = 'Tie game! Play again?' : 
    scoreMessage = 'You lose! Play again?';
    if (confirm(scoreMessage)) {
        gameOne();
    } else {
        console.log('Game ended');
        return;
    }
}

const array = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let score = 0;
let winPts = 0;
let lossPts = 0;
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(playerSelection=button.id, computerSelection);
    });
});
const resultContainer = document.querySelector('.result');
const resultString = document.createElement('p');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');

// prematurely quiting the game causes typeErrors