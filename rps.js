const computerPlay = function () {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoiceIndex = Math.floor(Math.random()*3)
  return choices[randomChoiceIndex];
}

const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    return 1
  } else if (playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors' ) {
    return 0
  } else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === 'rock' && computerSelection === 'paper' || playerSelection === 'paper' && computerSelection === 'scissors') {
    return -1
  } else {
    return 0
  }
}

const game = function () {
  //use the playRound in here to get a best of 5
  let playerWins = 0;
  let computerWins = 0;

  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt('rock, paper, or scissors')
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log('you have played: ' + playerSelection + ", computer has played: " + computerSelection)
    computerWins -= result;
    playerWins += result;
  }

  if (playerWins > computerWins) {
    return 'player has won';
  } else if (computerWins > playerWins) {
    return 'computer has won';
  } else {
    return 'tie'
  }
}
/**
 * rock beats scissors
 * paper beats rock
 * scissors beats paper
 *  */
