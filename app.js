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
    if (playerSelection !== 'rock' || playerSelection !== 'paper' || playerSelection !== 'scissors') {
        return;
    } else if (playerSelection == computerSelection) {
        console.log(`Tie! Both selected ${playerSelection}`);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return score += 1;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return score += 1;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return score += 1;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return score -= 1;
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

// prematurely quiting the game causes typeErrors