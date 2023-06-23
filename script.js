const weapons = ["rock", "paper", "scissors"];

function playerChoice() {
    let choice = prompt("Pick a Weapon")
    return choice;
}

function getComputerChoice(weapons) {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function compareChoices(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("Tie game!");
    } else if (playerChoice == "rock" && computerChoice === "scissors" ||
        playerChoice === "paper" && computerChoice === "rock" ||
        playerChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win!");
        playerScore++;
    } else {
        console.log("You Lose!");
        computerScore++;
    }
}

let player = playerChoice();
let computer = getComputerChoice(weapons);
let playerScore = 0;
let computerScore = 0;

console.log(`Player chose ${player}`);
console.log(`Computer chose ${computer}`);

compareChoices(player, computer);

console.log(`Player Score: ${playerScore}`);
console.log(`Computer Score: ${computerScore}`);