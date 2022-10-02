function getComputerChoice() {
    computerSelection = array[Math.floor(Math.random() * array.length)];
    return computerSelection;
}
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    const wrongChoice = 'Invalid input. Type rock, paper, or scissors as an input.'
    if (playerSelection == 'bad') {
        console.log(wrongChoice);
        alert(wrongChoice);
    } else if (playerSelection == computerSelection) {
        console.log(`Tie! Both selected ${playerSelection}`);
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || ((playerSelection == 'scissors' && computerSelection == 'paper'))) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return score += 1;
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return score -= 1;
    }
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
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
        playRound(playerSelection=button.id, computerSelection);
    });
});
// gameOne();

// prematurely quiting the game causes typeErrors