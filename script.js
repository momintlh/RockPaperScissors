function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(
  playerSelection,
  computerSelection,
  playerScore,
  computerScore
) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore += 10;
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore += 10;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let index = 0; index < 3; index++) {
    const playerSelection = prompt("rock, paper or scissors?: ");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection, playerScore, computerScore);
  }

  if (playerScore > computerScore) {
    console.log(`Player wins with ${playerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins with ${computerScore}`);
  } else {
    console.log("It's a tie game.");
  }
}

game();
