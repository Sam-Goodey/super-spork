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
let gameLoop = true;

while (gameLoop) {
    let player = playerChoice();
    let computer = getComputerChoice(weapons);

    console.log(`Player chose ${player}`);
    console.log(`Computer chose ${computer}`);

    compareChoices(player, computer);

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (playerScore + computerScore == 3) {
        if (playerScore > computerScore) {
            console.log("You won best out of 3!");
        } else {
            console.log("You lost best out of 3!");
        }

        playerScore = 0;
        computerScore = 0;

        let playAgainResponse = prompt("Do you want to play again? (y/n)");
        if (playAgainResponse.toLowerCase() != "y") {
            gameLoop = false;
        }
    }
}