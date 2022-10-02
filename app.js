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
function gameOver(n) {
    // Update resultString
    if (x = 1) resultString.textContent = `You won this round!!! Click on a button to start a new game.`;
    if (x = 2) resultString.textContent = `Sorry, you lost this round. Click on a button to start a new game.`;
    else resultString.textContent = `This round was a tie. Click on a button to start a new game.`;
};
function game() {
    btn.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id);
            playRound(playerSelection=button.id, computerSelection);
            moves++;
            movesLeft.textContent = `Moves Remaining: ${rounds-moves}`;
            if (moves == rounds) {
                if (winPts > lossPts) {
                    gameOver(1);
                } else if (winPts < lossPts) {
                    gameOver(2);
                } else {
                    gameOver();
                }
                moves = 0;
                winPts = 0;
                lossPts = 0;
                wins.textContent = '-';
                losses.textContent = '-'; 
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
const resultString = document.createElement('div');
resultString.style.cssText = 'margin: 0 200px';
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const movesLeft = document.querySelector('.moves');
movesLeft.textContent = `Moves Remaining: ${rounds-moves}`;
game();

// Want to create overlay for gameOver()