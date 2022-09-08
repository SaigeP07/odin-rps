
let result = "";
let playerScore = 0;
let computerScore = 0;
let roundNum = 0;


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
        ++roundNum;
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        result = "Point goes to the Computer";
        ++computerScore;
        ++roundNum;
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        result = "Point goes to the Computer";
        ++computerScore;
        ++roundNum;
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        result = "Point goes to the Computer";
        ++computerScore;
        ++roundNum;
    } else {
        result = "Point goes to the You!";
        ++playerScore;
        ++roundNum;
    }
     console.log(result);
}

function scoreBoard () {
    if (roundNum === 5 && playerScore > computerScore) {
        alert("Congratulations. You Win!");
    } else if (roundNum === 5 && computerScore > playerScore) {
        alert("The Game is over. You lose.");
    } else if ( roundNum === 5 && playerScore === computerScore) {
        alert("Tie Game. Try again.")
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playGame(prompt("Rock, Paper, or scissors?", "").toLowerCase(), getComputerChoice());
        getComputerChoice(i);
        scoreBoard(i);
    }
}

game();