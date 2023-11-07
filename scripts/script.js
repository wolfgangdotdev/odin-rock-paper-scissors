function randomFromArray(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function getComputerSelection() {
	let selections = ["rock", "paper", "scissors"];
	return randomFromArray(selections);
}

function addToLog(text) {
	let li = document.createElement("li");
	li.textContent = text;
	logList.appendChild(li);
}

function playRound(playerSelection, computerSelection) {
	if (playerScore >= 5 || computerScore >= 5) {
		return;
	}

	if (playerSelection == computerSelection) {
		addToLog(`It's a draw!`);
		return;
	}

	let win = undefined;

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
		playerScoreText.textContent = playerScore;
		addToLog(`You Win! ${playerSelection} beats ${computerSelection}!`);
	} else {
		computerScore++;
		computerScoreText.textContent = computerScore;
		addToLog(`You Lose! ${playerSelection} beats ${computerSelection}!`);
	}

	if (playerScore >= 5) {
		addToLog("You Win!!");
	}
	if (computerScore >= 5) {
		addToLog("Computer Win!!");
	}
}

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let playerScoreText = document.querySelector(".player-score");
let computerScoreText = document.querySelector(".computer-score");
let logList = document.querySelector(".log-list");

let computerScore = 0;
let playerScore = 0;

document.querySelectorAll(".selection").forEach((element) =>
	element.addEventListener("click", (event) => {
		let playerSelection = event.target.textContent.toLowerCase();
		console.log(playRound(playerSelection, getComputerSelection()));
	})
);
