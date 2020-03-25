let playerName = ""
let pName = ""
playerName = prompt("Who are you?");
pName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
alert(`Hello ${pName}, let's play a game of rock, paper, scissors`)

let cCount = 0;
let pCount = 0;


function computerPlay () {
  let options = ["rock", "paper", "scissors"];
  let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice
}

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound("rock", computerPlay()));
paperButton.addEventListener("click", () => playRound("paper", computerPlay()));
scissorsButton.addEventListener("click", () => playRound("scissors", computerPlay()));



function playRound(playerSelection, computerSelection) {
  let div = document.querySelector("div")
    if (playerSelection == "rock" && computerSelection == "rock") {
      div.innerHTML = `It's a tie, you both chose ${computerSelection}. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
      cCount+=1;
      div.innerHTML = `You loose, paper wins over ${playerSelection}. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "rock" && computerSelection =="scissors") {
      pCount +=1;
      div.innerHTML = `You win, ${computerSelection} get smashed. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
      div.innerHTML = `It's a tie, you both chose paper. <br> ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
      pCount=+1;
      div.innerHTML = `You win, ${computerSelection} looses. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "paper" && computerSelection =="scissors") {
      cCount+=1;
      div.innerHTML = `You loose, paper get cut. <br> ${pName} : Computer <br>
      ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
      div.innerHTML = `It's a tie, you both chose ${computerSelection}. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
      pCount +=1;
      div.innerHTML = `You win, paper gets cut. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }

    else if (playerSelection == "scissors" && computerSelection =="rock") {
      cCount=+1;
      div.innerHTML = `You loose, ${playerSelection} get smashed. <br>
      ${pName} : Computer <br> ${pCount} : ${cCount}`;
    }
}


function result () {
  if (cCount < pCount) {
   alert(`Final Score: ${pCount}:${cCount} Congratulations! ${pName} is the winner!`);
  }

  else if (cCount > pCount) {
    alert(`Final Score: ${cCount}:${pCount} Computer won this game! You are the looser.`);
  }

  else if (cCount == pCount) {
    alert(`Final Score: ${pCount}:${cCount} This game is a draw`)
  }
}
