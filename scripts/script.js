function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerSelection() {
	let selections = ["rock", "paper", "scissors"];
	return randomFromArray(selections);
}

function playRound(playerSelection, computerSelection) {
	let win = undefined;

	if (playerSelection == computerSelection) {
		return `It's a draw!`;
	}

	if (playerSelection == "rock") {
		if (computerSelection == "scissors") {
			win = true;
		} else if (computerSelection == "paper") {
			win = false;
		}
	} else if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			win = true;
		} else if (computerSelection == "scissors") {
			win = false;
		}
	} else if (playerSelection == "scissors") {
		if (computerSelection == "paper") {
			win = true;
		} else if (computerSelection == "rock") {
			win = false;
		}
	}

	playerSelection =
		playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

	computerSelection =
		computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

	if (win) {
		playerScore++;
		return `You Win! ${playerSelection} beats ${computerSelection}!`;
	} else {
		computerScore++;
		return `You Lose! ${playerSelection} beats ${computerSelection}!`;
	}
}

function game() {
	let playerSelection = "";

	while (
		playerSelection != "rock" &&
		playerSelection != "paper" &&
		playerSelection != "scissors"
	) {
		playerSelection = prompt(
			"Enter your selection ('rock', 'paper', 'scissors'): "
		).toLowerCase();
		computerSelection = getComputerSelection();
	}

	console.log(playRound(playerSelection, computerSelection));
}

let computerScore = 0;
let playerScore = 0;

while (playerScore < 3 && computerScore < 3) {
	game();
}

if (playerScore > computerScore) {
	console.log(`Player Wins!`);
} else {
	console.log(`Computer Wins!`);
}
