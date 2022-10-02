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
        resultString.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        winPts += 1;
        wins.textContent = winPts;
    } else {
        resultString.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        lossPts += 1;
        losses.textContent = lossPts;
    }
    resultContainer.appendChild(resultString);
}
function game() {
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            playRound(playerSelection=button.id, computerSelection);
            moves++;
            movesLeft.textContent = `Moves Remaining: ${rounds-moves}`;
            if (moves == rounds) {
                alert('game over');
            }
        });
    });
}


const array = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let moves = 0;
let winPts = 0;
let lossPts = 0;
const rounds = 5;
const btn = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');
const resultString = document.createElement('p');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const movesLeft = document.querySelector('.moves');
movesLeft.textContent = `Moves Remaining: ${rounds-moves}`;
game();

// prematurely quiting the game causes typeErrors