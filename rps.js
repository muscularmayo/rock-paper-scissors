//GAME FUNCTIONS

const computerPlay = function () {
  const choices = ['rock', 'paper', 'scissors']
  const randomChoiceIndex = Math.floor(Math.random()*3)
  return choices[randomChoiceIndex];
}

const playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log('computer plays ' + computerSelection)
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


  let playerSelection = prompt('rock, paper, or scissors')
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);

  console.log('you have played: ' + playerSelection + ", computer has played: " + computerSelection)

  computerWins -= result;
  playerWins += result;


  if (playerWins > computerWins) {
    return 'player has won';
  } else if (computerWins > playerWins) {
    return 'computer has won';
  } else {
    return 'tie'
  }
}




//DOM MANIPULATION

//const choices = document.querySelectorAll('button')

let buttons = document.querySelectorAll('button')
const results = document.querySelector('.results')
const playerScore = document.getElementById('playerScore')
const tieScore = document.getElementById('tieScore')
const computerScore = document.getElementById('computerScore')
const recap = document.getElementById('recap')

let player = 0
let computer = 0
let tie = 0

playerScore.innerHTML = 'player score: ' + player
computerScore.innerHTML = 'computer score: ' + computer
tieScore.innerHTML = 'ties: ' + tie

buttons.forEach(function(button) {
  button.addEventListener('click', function (e) {
    let compChoice = computerPlay();
    const winner = playRound(this.id, compChoice);

    if (winner === 1) {
      //player wins
      //target playerScore id and update that score
      player++
      playerScore.innerHTML = 'player score: ' + player
      recap.innerHTML = 'you played ' + this.id + ' and the computer played ' + compChoice + ' and you won!'
    } else if (winner === 0) {
      //tie
      //target tieScore id and update that score
      tie++
      tieScore.innerHTML = 'ties: ' + tie
      recap.innerHTML = 'you played ' + this.id + ' and the computer played ' + compChoice + ' and it\'s a tie!'
    } else if (winner === -1) {
      //computer wins
      computer++
      computerScore.innerHTML = 'computer score: ' + computer
      recap.innerHTML = 'you played ' + this.id + ' and the computer played ' + compChoice + ' and the computer wins!'
    }

  })
})









/**
 * rock beats scissors
 * paper beats rock
 * scissors beats paper
 *  */

