let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){


    let computerChoice = (Math.floor(Math.random() * 3) + 1);
    if(computerChoice == 1) {
        computerChoice = "rock";
    } else if (computerChoice == 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){

    let humanChoice = prompt("What do you pick?", "rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}



function playRound(humanSelection, computerSelection) {
    if (humanSelection == "rock" && computerSelection == "scissors" ||
        humanSelection == "paper" && computerSelection == "rock" ||
        humanSelection == "scissors" && computerSelection == "paper") {
        humanScore++;
        console.log(humanSelection + " beats " + computerSelection + " point for humans!");
    } else if (humanSelection == computerSelection) {
        console.log("It's a draw!");
    } else {
        computerScore++;
        console.log(computerSelection + " beats " + humanSelection + " point for computers!");
    }
}
// debug
//console.log(getComputerChoice())
//console.log(getHumanChoice())



for (let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    let actualRound = i+1;
    console.log("Round " + actualRound + ": " + " scores: " + "humans: " + humanScore + ", computers:" + computerScore + ".");
}

