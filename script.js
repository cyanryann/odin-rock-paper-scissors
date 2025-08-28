const choices = ["rock", "paper", "scissors"];
const button = document.querySelector("#pressme");
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}
function getHumanChoice() {
    let playerChoice = prompt("Enter your move (rock, paper, or scissors):");
    return playerChoice.toLowerCase;
}
button.addEventListener("click", () => {
    console.log(getHumanChoice);
});

