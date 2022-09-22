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
            return score += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else if (playerSelection == 'scissors') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return score -= 1;
        } else {
            console.log('Enter a valid input of rock, paper, or scissors');
        }
        break;
    }
    while (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return score += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else if (playerSelection == 'rock') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return score -= 1;
        } else {
            console.log('Enter a valid input of rock, paper, or scissors');
        }
        break;
    }
    while (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return score += 1;
        } else if (playerSelection == computerSelection) {
            console.log(`Tie! Both selected ${playerSelection}`);
        } else if (playerSelection == 'paper') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return score -= 1; 
        } else {
            console.log('Enter a valid input of rock, paper, or scissors');
        }
        break;
    }
}

function game() {
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
        game();
    } else {
        console.log('Game ended')
    }
}

const array = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';
let score = 0;

game();



// score not updating winCount and loseCount at end of game