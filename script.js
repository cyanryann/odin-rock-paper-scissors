const choices = ["rock", "paper", "scissors"];
const button = document.querySelector("#pressme");
const result = document.querySelector("#resulttext");
const buttons = document.querySelectorAll("button");
const score = document.querySelector("#scoreboard");
let humanScore = 0;
let computerScore = 0;
let isWaiting = false;
let gameCount = 0;
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}
function playRound(str) {
    let humanChoice = str.toLowerCase();
    let computerChoice = getComputerChoice();
    if (humanChoice == "rock")
    {
        if (computerChoice == "rock")
        {
            console.log("Rock and rock! You tied!");
            result.innerHTML = "The computer chose rock. You Tie"
        }
        else if (computerChoice == "paper")
        {
            console.log("Paper beats rock! You lost!");
            computerScore++;
            result.innerHTML = "The computer chose paper. You Lose..."
        }
        else 
        {
            console.log("Rock beats scissors! You win!");
            humanScore++;
            result.innerHTML = "The computer chose scissors. You Win!"
        }
    }
    else if (humanChoice == "paper")
    {
        if (computerChoice == "rock")
        {
            console.log("Paper beats rock! You win!");
            humanScore++;
            result.innerHTML = "The computer chose rock. You Win!"
        }
        else if (computerChoice == "paper")
        {
            console.log("Paper and paper! You tied!");
            result.innerHTML = "The computer chose paper. You Tie"
        }
        else 
        {
            console.log("Scissors beats paper! You lost!");
            computerScore++;
            result.innerHTML = "The computer chose scissors. You Lose...";
        }
    }
    else
    {
        if (computerChoice == "rock")
        {
            console.log("Rock beats scissors! You lose!");
            computerScore++;
            result.innerHTML = "The computer chose rock. You Lose...";
        }
        else if (computerChoice == "paper")
        {
            console.log("Scissors beats paper! You win!");
            humanScore++;
            result.innerHTML = "The computer chose paper. You Win!";
        }
        else 
        {
            console.log("Scissors and scissors! You tied!");
            result.innerHTML = "The computer chose scissors. You Tie";
        }
    }

    score.innerHTML = "You " + humanScore + " - " + computerScore + " Computer";
    gameCount++;
    if (gameCount == 5)
    {
        nowWaiting = false;
        gameCount = 0;
        result.innerHTML = "Out of 5 games, you won " + humanScore + ". ";
        buttons.forEach((button) => {
            if (button.id != "pressme")
            {
                button.disabled = true;
                console.log("disabling stuff");
            }

        })
        button.disabled = false;
    }
}
function nowWaiting() {
    isWaiting = true;
    buttons.forEach((button) => {
        button.disabled=false;
    })
    button.disabled = true;
    humanScore = 0;
    computerScore = 0;
    score.innerHTML = "You " + humanScore + " - " + computerScore + " Computer";
}
button.addEventListener("click", nowWaiting);
buttons.forEach((button) => {
    if (button.id != "pressme")
    {
        button.addEventListener("click", () => {
        console.log("button works");
        if (isWaiting)
        {
            playRound(button.id);
        }
        
    })
    button.disabled = true;
    }
    
})