let playerScore = 0;
let compScore = 0;
let roundNumber = 0;

// play matching game
function playMatch(){
  const buttons = document.querySelectorAll(".buttons button");
  const choices = ["HEADS","TAILS"];

  buttons.forEach(function(button){
    button.addEventListener("click",function(){
      // get random computer choice
      const randomNumber = Math.floor(Math.random()*choices.length);
      const compChoice = choices[randomNumber];

      // calls compareChoice function, passes textContent to playerChoice
      compareChoice(this.textContent,compChoice);
    });
  });
};
// update text to the scoreboard
function updateScore(){
  const displayPlayerScore = document.getElementById("playerScore");
  const displayCompScore = document.getElementById("compScore");
  const displayRoundNumber = document.getElementById("roundNumber");

  displayPlayerScore.innerHTML = playerScore;
  displayCompScore.innerHTML = compScore;
  displayRoundNumber.innerHTML = "Round: " + roundNumber;
}
// compare choices between player and computer
function compareChoice(playerChoice, compChoice){
  const result = document.getElementById("result");
  const displayWinner = document.getElementById("winner");

  // check comparison between player and computer for winner
  if(playerChoice === compChoice){
    result.innerHTML = playerChoice + "  "  + " &#x1F19A " + "  " + compChoice;
    displayWinner.innerHTML = "You Win ! &#x1F31F ";
    playerScore ++;
    roundNumber++;
    updateScore();
    return;
  }
  else {
    result.innerHTML = playerChoice + "  " + " &#x1F19A " + "  " + compChoice;
    displayWinner.innerHTML = "You Lose ! &#x26A1 ";
    compScore++;
    roundNumber++;
    updateScore();
    return;
  }
}
// call matching game function - starts the game
playMatch();
