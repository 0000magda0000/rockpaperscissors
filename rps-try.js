let playerName = ""
let pName = ""
playerName = prompt("Who are you?");
pName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
alert(`Hello ${pName}, let's play a game of rock, paper, scissors`)

let cCount = 0;
let pCount = 0;

function computerPlay () {
let options = ["rock", "paper", "scissors"]
let computerChoice = options[Math.floor(Math.random() * options.length)];
return computerChoice
}



const buttons = document.querySelectorAll("button");
  buttons.forEach (function (button){
      button.addEventListener("click", function(){
          playRound(button.innerHTML, computerPlay());
          console.log(button.innerHTML)
      })});

function playRound (playerSelection, computerSelection) {

if (playerSelection == "rock" && computerSelection == "rock") {
  alert(`It's a tie, you both chose ${computerSelection}. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "rock" && computerSelection == "paper") {
  pCount+=1;
  alert(`You loose, paper wins over ${playerSelection}. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "rock" && computerSelection =="scissors") {
  cCount +=1;
  alert(`You win, ${computerSelection} get smashed. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "paper" && computerSelection == "paper") {
  alert(`It's a tie, you both chose paper. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "paper" && computerSelection == "rock") {
  cCount=+1;
  alert(`You win, ${computerSelection} looses. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "paper" && computerSelection =="scissors") {
  pCount+=1;
  alert(`You loose, paper get cut. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "scissors" && computerSelection == "scissors") {
  alert(`It's a tie, you both chose ${computerSelection}. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
  cCount +=1;
  alert(`You win, paper gets cut. ${pName} ${cCount}: Computer ${pCount}`);
}
else if (playerSelection == "scissors" && computerSelection =="rock") {
  pCount=+1;
  alert(`You loose, ${playerSelection} get smashed. ${pName} ${cCount}: Computer ${pCount}`);
}



for (let i=0; i<5; i++) {
playRound()
}

if (cCount < pCount) {
alert(`Final Score: ${pCount}:${cCount} Congratulations! ${pName} is the winner!`);
}

else if (cCount > pCount) {
alert(`Final Score: ${cCount}:${pCount} Computer won this game! You are the looser.`);
}

else if (cCount == pCount) {
alert(`Final Score: ${pCount}:${cCount} This round is a draw`)
}
