const array = ['rock', 'paper', 'scissors'];
let playerSelection = '';
let computerSelection = '';

function getComputerChoice() {
    computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}

let gameRound = () => {
    let playerChoice= prompt("Rock Paper or Scissors?",'');
    playerSelection = playerChoice.toLowerCase();
    computerSelection = getComputerChoice();
    console.log('player selected: ' + playerSelection);
    console.log('computer selected: ' + computerSelection);
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        alert(`Invalid input. Type rock, paper, or scissors as an input.`)
    }
    while (computerSelection == 'rock') {
        (playerSelection == 'paper') ? console.log(`You win! ${playerSelection} beats ${computerSelection}`) : playerSelection == computerSelection ? console.log(`Tie! Both selected ${playerSelection}`) : console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        break;
    }
    while (computerSelection == 'paper') {
        (playerSelection == 'scissors') ? console.log(`You win! ${playerSelection} beats ${computerSelection}`) : playerSelection == computerSelection ? console.log(`Tie! Both selected ${playerSelection}`) : console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        break;
    }
    while (computerSelection == 'scissors') {
        (playerSelection == 'rock') ? console.log(`You win! ${playerSelection} beats ${computerSelection}`) : playerSelection == computerSelection ? console.log(`Tie! Both selected ${playerSelection}`) : console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        break;
    }
};

gameRound();