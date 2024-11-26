let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanSelection, computerSelection) {
    let resultMessage = "";
    if (
        (humanSelection == "rock" && computerSelection == "scissors") ||
        (humanSelection == "paper" && computerSelection == "rock") ||
        (humanSelection == "scissors" && computerSelection == "paper")
    ) {
        humanScore++;
        resultMessage = `You win this round! ${humanSelection} beats ${computerSelection}!`;
    } else if (humanSelection == computerSelection) {
        resultMessage = `It's a draw`;
    } else {
        computerScore++;
        resultMessage = `${computerSelection} beats ${humanSelection} you lose!`;
    }

    updateResults(resultMessage);
    checkWinner();
}

function updateResults(message) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `
        <p>${message}</p>
        <p>Scores - You: ${humanScore} | Computer: ${computerScore}</p>
    `;
}

function checkWinner() {
    if (humanScore === 5 || computerScore == 5) {
        const resultsDiv = document.getElementById("results");
        const winner = humanScore === 5 ? "You win the game!" : "Computer wins the game!";
        resultsDiv.innerHTML += `<p><strong>${winner}</strong></p>`;

        document.querySelectorAll("button").forEach(button => button.disabled = true);

    }
}

document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice()));
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()));



