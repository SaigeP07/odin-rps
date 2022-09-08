
let result = "";
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    for (let i = 0; i < 5; i++) {
        let randomValue = Math.floor(Math.random() * 10);
        if (randomValue >= 0 && randomValue <= 3) {
            return ("rock");
        } else if ( randomValue > 3 && randomValue <= 6 ) {
            return ("paper");
        } else {
            return ("scissors");
        } 
    }
}

let computerSelection = getComputerChoice();


function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = "Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "Paper beats rock. Point goes to the Computer";
        ++computerScore;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "Scissors beat Paper. Point goes to the Computer";
        ++computerScore;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = "Rock beats Scissors. Point goes to the Computer";
        ++computerScore;
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        result = "Rock beats Scissors! Point goes to You!";
        ++playerScore;
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        result = "Paper beats rock! Point goes to You!";
        ++playerScore;
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        result = "Scissors beats Paper! Point goes to You!";
        ++playerScore;
    }
     console.log(result);
}

function scoreBoard () {
    if (playerScore === 5 && playerScore > computerScore) {
        alert("Congratulations. You Win! Click Reset Game to Play again");
    } else if (computerScore === 5 && computerScore > playerScore) {
        alert("The Game is over. You lose. Click Reset Game to Play again");
    } 
}

function game() {
    for (let i = 0; playerScore<5 && computerScore<5; i++) {
        playGame(prompt("Rock, Paper, or scissors?", "").toLowerCase(), getComputerChoice());
        getComputerChoice(i);
        scoreBoard(i);
    } 
}

setTimeout(function() {
    game();
}, 500);

let reloadButton = document.querySelector("#myButton");
reloadButton.addEventListener('click', function() {
    window.location.reload(true);
});
