
// all allowed moves
const ALLOWED_MOVES = ["rock", "paper", "scissors"];

// returns true only if firstHand argument wins
function isFirstHandAWinner(firstHand, secondHand) {
  if (firstHand === "rock") {
    return (secondHand === "scissors");
  }

  if (firstHand === "paper") {
    return (secondHand === "rock");
  }

  if (firstHand === "scissors") {
    return (secondHand === "paper");
  }

  return false;
};

// returns round result text
const getRoundResultText = (prefix, firstHand, secondHand) => {
  let separator = prefix.indexOf("draw") === -1 ? "beats" : "vs";
  return `${prefix}! ${firstHand.toUpperCase()} ${separator} ${secondHand.toUpperCase()}`;
};

// returns randomly selected computer move
function computerPlay() {
  let randomIndex = Math.floor(Math.random() * ALLOWED_MOVES.length);
  return ALLOWED_MOVES[randomIndex];
};

// gets input from player and returns player move
function playerPlay() {
  let playerHand = "";

  while (!ALLOWED_MOVES.includes(playerHand)) {
    playerHand = prompt("Enter rock, paper or scissors: ").toLowerCase();
  }

  return playerHand;
}

// returns result of a single round (player vs computer)
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return getRoundResultText("It's a draw", playerSelection, computerSelection);
  } else {
    if (isFirstHandAWinner(playerSelection, computerSelection)) {
      return getRoundResultText("You win", playerSelection, computerSelection);
    } else {
      return getRoundResultText("You lose", computerSelection, playerSelection);
    }
  }
}

function game(rounds = 5) {
  rounds = 1 ?? rounds;

  for (let round = 1; round <= rounds; round++) {
    let result = playRound(playerPlay(), computerPlay());
    console.log(`Round ${round} => ${result}`);
  }

}
