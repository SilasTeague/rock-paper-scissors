let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice.toLowerCase() === "rock") {
        if (humanChoice.toLowerCase() === "scissors") {
            console.log("You lose! Rock beats Scissors!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "paper") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
        }
        else {
            console.log("It was a tie!");
        }
    } else if (computerChoice.toLowerCase() === "paper") {
        if (humanChoice.toLowerCase() === "rock") {
            console.log("You lose! Paper beats Rock!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "scissors") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
        }
        else {
            console.log("It was a tie!");
        }
    } else if (computerChoice.toLowerCase() === "scissors") {
        if (humanChoice.toLowerCase() === "paper") {
            console.log("You lose! Scissors beats Paper!");
            computerScore++;
        } else if (humanChoice.toLowerCase() === "rock") {
            console.log("You win! Rock beats Scissors!");
            humanScore++;
        }
        else {
            console.log("It was a tie!");
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (computerScore > humanScore) {
        console.log("Computer wins overall!");
    } else if (humanScore > computerScore) {
        console.log("You win overall!");
    } else {
        console.log("It was a tie overall!");
    }
}

playGame();
