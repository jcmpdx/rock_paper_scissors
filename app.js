const array = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}

function getPlayerChoice() {
    playerChoice = prompt("Rock Paper or Scissors?",'');
    playerSelection = playerChoice.toLowerCase();
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        alert(`Invalid input. Type rock, paper, or scissors as an input.`);
        return playerSelection = null;
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
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            loseCount += 1;
        }
        break;
    }
    while (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winCount += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            loseCount += 1; 
        }
        break;
    }
    while (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            winCount += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            loseCount += 1; 
        }
        break;
    }
}


let playerSelection = '';
let computerSelection = '';
let winCount = 0;
let loseCount = 0;
playRound();

