const choices = ["rock", "paper", "scissors"];


function getComputerChoice() {
    const randomWord = Math.floor(Math.random() * choices.length);
    return choices[randomWord];
}

const randomChoice = getComputerChoice();
// console.log(randomChoice);

function playGame() {

    let playerScore = 0;
    let computerScore = 0;

  function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("What is your selection between rock, paper and scissors?").toLowerCase();
	
    if (playerSelection == "rock" && randomChoice == "rock") {
		return "Tie!";
	} else if (playerSelection == "rock" && randomChoice == "scissors") {
		return "You win!";
        playerScore++;
	} else if (playerSelection == "rock" && randomChoice == "paper") {
		return "You lose!";
        computerScore++;
	}

	if (playerSelection == "paper" && randomChoice == "rock") {
		return "You win!";
        playerScore++;
	} else if (playerSelection == "paper" && randomChoice == "paper") {
		return "Tie!"
	} else if (playerSelection == "paper" && randomChoice == "scissors") {
		return "You lose!";
        computerScore++;
	}

	if (playerSelection == "scissors" && randomChoice == "rock") {
		return "You lose!";
        computerScore++;
	} else if (playerSelection == "scissors" && randomChoice == "paper") {
		return "You win!";
        playerScore++;
	} else if (playerSelection == "scissors" && randomChoice == "scissors") {
		return "Tie!";
	}

  }

  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }

  if (playerScore > computerScore) {
    return "Player wins the game!";
  } else if (computerScore > playerScore) {
    return "Computer wins the game!";
  } else if (playerScore == computerScore) {
    return "It's a tie!";
  }

 

  }

  playGame();
  