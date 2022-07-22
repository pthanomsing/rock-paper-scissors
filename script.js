
/* Get random element from an array*/

function getRandom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

/* Randomly select rock, paper or scissors from the array*/ 

function computerPlay() {

    const play = ['rock', 'paper', 'scissors'];
    return getRandom(play);
}

/* Play two selection of input against each other and display the result*/ 

function playRound(playerSelection, computerSelection) {


    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    result = "You draw!, Both of you chose Rock";
                    break;
                case 'paper':
                    result = "You lose!, Paper beats Rock";
                    break;
                case 'scissors':
                    result = "You win!, Rock beats Scissors";
                    break;
            }
            round++;
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    result = "You win!, Rock beats Paper";
                    break;
                case 'paper':
                    result = "You draw!, Both of you chose Paper";
                    break;
                case 'scissors':
                    result = "You lose!, Scissors beats Paper";
                    break;
            }
            round++;
            break;
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    result = "You lose!, Rock beats Scissors";
                    break;
                case 'paper':
                    result = "You win!, Scissors beats Paper";
                    break;
                case 'scissors':
                    result = "You draw!, Both of you chose Scissors";
                    break;
            }
            round++;
            break;
        default:
            result = "Please choose Rock, Paper or Scissors!";

    }
    return result;
}


/* Play 5 round of game, keep the score and report the winner or loser at the end */

function play(playerChoice) {

        const computerChoice = computerPlay();

        clearHilight(); 
        
        roundResult.textContent = `[ROUND ${round}]  ${playRound(playerChoice,computerChoice)}`;
        resultContainer.appendChild(roundResult);

        roundScore = updateScore(result);
        
        gameResult.textContent = checkWinner();
        resultContainer.appendChild(gameResult);

        hilightButton(playerChoice, computerChoice, roundScore);

        printScore();
        
}


/* Check for and print the winner after the score reached 5*/

function checkWinner() {
    if (playerScore>=5 && playerScore>=computerScore) {
        return 'YOU ARE THE WINNER! 🥳🎉'
    }
    else if (computerScore>=5 && computerScore>=playerScore) {
        return 'THE COMPUTER WON! 😥💔';
    }
    else {
        return;
    }
}

/* Update the score based on the result of the round and return result. 
Return 1 = win, 2 = lose, 3 = draw 
Return 0 if input invalid*/

function updateScore(result) {

    score = (result.split(',', 1)).toString();

    switch (score) {
        case 'You win!':
            playerScore++;
            return 1;
        case 'You lose!':
            computerScore++;
            return 2;
        case 'You draw!':
            return 3;
        default:
            return 0
    }
}

/* Print the current score on the page */

function printScore() {

    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#computer-score').textContent = computerScore;

}


/* Hilight the buttons base on the result of the round 
roundScore : 1 = win, 2 = lose, 3 = draw */

function hilightButton(playerChoice, computerChoice, roundScore) {

    switch (roundScore) {
        case 1:
            document.querySelector(`#${playerChoice}`).style.backgroundColor = "green";
            document.querySelector(`#computer-${computerChoice}`).style.backgroundColor = "green";
            break;
        case 2:
            document.querySelector(`#${playerChoice}`).style.backgroundColor = "red";
            document.querySelector(`#computer-${computerChoice}`).style.backgroundColor = "red";
            break;
        case 3:
            document.querySelector(`#${playerChoice}`).style.backgroundColor = "grey";
            document.querySelector(`#computer-${computerChoice}`).style.backgroundColor = "grey";
            break;
        default:
            return 0         
    }
          
    

}


/* Reset all buttons background color to its default setting */

function clearHilight() {

    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.style.backgroundColor = "";
    });

}


    

let playerScore = 0;
let computerScore = 0;
let round = 0;
let roundScore = 0;

const resultContainer = document.querySelector('#result');

/* Select all player buttons and play the round when clicked */

const playerButtons = document.querySelectorAll('#rock,#paper,#scissors');

playerButtons.forEach((playerButton) => {
    playerButton.addEventListener('click', function(){
        play(playerButton.id);
    });
});


/* Create div to contain the round and game result */

const roundResult = document.createElement('div');
roundResult.setAttribute("id","round-result");

const gameResult = document.createElement('div');
gameResult.setAttribute("id","game-result");


