const btns = document.querySelectorAll('button');
let playerSelection = null;

btns.forEach(btn => {

  btn.addEventListener("click", function () {
    playerSelection = btn.textContent;
    console.log(playerSelection)
  });


});





function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return "Player wins!";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  ) {
    return "Computer wins!";
  } else {
    return "No Result! due to invalid input";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  console.log(
    `Player chose "${playerSelection}" while the Computer chose "${computerSelection}"`
  );
  console.log(result);

  if (result === "Player wins!") {
    playerScore += 10;
  } else if (result === "Computer wins!") {
    computerScore += 10;
  }


  // Game End Logic
  if (playerScore > computerScore) {
    console.log(`Player wins with ${playerScore} points!`);
  } else if (computerScore > playerScore) {
    console.log(`Computer wins with ${computerScore} points!`);
  } else {
    console.log("It's a draw!");
  }
}
