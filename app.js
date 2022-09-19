const array = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    let comptuterChoice = array[Math.floor(Math.random() * array.length)];
    console.log(comptuterChoice);
}