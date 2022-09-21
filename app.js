function getComputerChoice() {
    computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock Paper or Scissors?",'');
    playerSelection = playerChoice.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        alert(`Invalid input. Type rock, paper, or scissors as an input.`);
        playerSelection = 'bad';
    }
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
    console.log('player selected: ' + playerSelection);
    console.log('computer selected: ' + computerSelection);
    while (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winCount += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else if (playerSelection == 'scissors') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            loseCount += 1;
        } else {
            console.log('Enter a valid input of rock, paper, or scissors');
        }
        break;
    }
    while (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winCount += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else if (playerSelection == 'rock') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            loseCount += 1; 
        } else {
            console.log('Enter a valid input of rock, paper, or scissors');
        }
        break;
    }
    while (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winCount += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else if (playerSelection == 'paper') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            loseCount += 1; 
        } else {
            console.log('Enter a valid input of rock, paper, or scissors');
        }
        break;
    }
}

function game() {
    let score = winCount + '-wins ' + loseCount + '-losses';
    for (let i = 0; i < 5; i++) {
        playRound();
        if (playerSelection == 'bad') {
            i--;   
        }
    }
    (winCount > loseCount) ? alert('You win! ' + score) :
    (winCount == loseCount) ? alert('Tie game! ' + score) : 
    alert('You lose! ' + score);
}

const array = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let winCount = 0;
let loseCount = 0;

game();

// score not updating winCount and loseCount at end of game
// need to make OK at incorrect input alert continue game