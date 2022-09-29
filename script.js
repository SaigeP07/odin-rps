
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";

let btnRock = document.querySelector('.rock');
let btnPaper = document.querySelector('.paper');
let btnScissors = document.querySelector('.scissors');
let reloadButton = document.querySelector(".myButton");

let scoreboardPlayerText = document.querySelector('.scoreboard-player');
let scoreboardComputerText = document.querySelector('.scoreboard-computer');
let gameMsgText = document.querySelector('.gameMsg');

let imgRock = document.createElement("img");
imgRock.src = "images/rock.png";

let imgPaper = document.createElement("img")
imgPaper.src = "images/paper.png";

let imgScissors = document.createElement("img")
imgScissors.src = "images/scissors.png";



btnRock.addEventListener('click', (e) => { 
    playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scoreBoard();
});

btnPaper.addEventListener('click', (e) => {
    playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scoreBoard();
});

btnScissors.addEventListener('click', (e) => {
    playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    scoreBoard();
});

reloadButton.addEventListener('click', function() {
    window.location.reload(true);
});

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 10);
    if (randomValue >= 0 && randomValue <= 3) {
        return ("rock");
    } else if ( randomValue > 3 && randomValue <= 6 ) {
        return ("paper");
    } else {
        return ("scissors");
    } 
};


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        gameMsgText.textContent = "Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        gameMsgText.textContent = "Paper beats rock. Point goes to the Computer.";
        ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        gameMsgText.textContent = "Scissors beat Paper. Point goes to the Computer.";
        ++computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        gameMsgText.textContent = "Rock beats Scissors. Point goes to the Computer.";
        ++computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        gameMsgText.textContent = "Rock beats Scissors! Point goes to You!";
        ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        gameMsgText.textContent = "Paper beats rock! Point goes to You!";
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        gameMsgText.textContent = "Scissors beats Paper! Point goes to You!";
        ++playerScore;
    }
     scoreboardPlayerText.textContent = playerScore;
     scoreboardComputerText.textContent = computerScore;
}

function scoreBoard () {
    if (playerScore === 5 && playerScore > computerScore) {
        gameMsgText.textContent = "Congratulations. You Win! Click 'Reset Game' to Play again!";
        disableBtns();
    } else if (computerScore === 5 && computerScore > playerScore) {
        gameMsgText.textContent = "The Game is over. You lose. Click 'Reset Game' to Play again.";
        disableBtns();
    } 
}

function disableBtns() {
    btnRock.setAttribute('disabled', '');
    btnPaper.setAttribute('disabled', '');
    btnScissors.setAttribute('disabled', '');
}