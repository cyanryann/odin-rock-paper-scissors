const choices = ["rock", "paper", "scissors"];
const button = document.querySelector("#pressme");
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}
function getHumanChoice() {
    let playerC = prompt("Enter your move (rock, paper, or scissors):");
    return playerC.toLowerCase();
}
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log(humanChoice);
    if (humanChoice == "rock")
    {
        if (computerChoice == "rock")
        {
            console.log("Rock and rock! You tied!");
        }
        else if (computerChoice == "paper")
        {
            console.log("Paper beats rock! You lost!");
            computerScore++;
        }
        else 
        {
            console.log("Rock beats scissors! You win!");
            humanScore++;
        }
    }
    else if (humanChoice == "paper")
    {
        if (computerChoice == "rock")
        {
            console.log("Paper beats rock! You win!");
            humanScore++;
        }
        else if (computerChoice == "paper")
        {
            console.log("Paper and paper! You tied!");
        }
        else 
        {
            console.log("Scissors beats paper! You lost!");
            computerScore++;
        }
    }
    else
    {
        if (computerChoice == "rock")
        {
            console.log("Rock beats scissors! You lose!");
            computerScore++;
        }
        else if (computerChoice == "paper")
        {
            console.log("Scissors beats paper! You win!");
            humanScore++;
        }
        else 
        {
            console.log("Scissors and scissors! You tied!");
        }
    }
}
function playGame() {
    humanScore = 0;
    computerScore = 0;
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (humanScore > computerScore)
    {
        console.log("You win overall!");
    }
    else
    {
        console.log("The computer wins overall!");
    }
}
if (button)
{
    console.log("button added!");
    button.addEventListener("click", playGame);
}

