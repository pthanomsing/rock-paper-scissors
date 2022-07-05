
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
            break;
        default:
            result = "Please choose Rock, Paper or Scissors!";

    }
    return result;
}

/* Play 5 round of game, keep the score and report the winner or loser at the end */

function play() {

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {

        let choice = prompt("Please choose Rock, Paper or Scissors", "Type Here");
        result = playRound(choice,computerPlay());
        console.log(result);
        updateScore(result);
        console.log(`Your score = ${playerScore}  Computer score = ${computerScore}`)
        
    }

    printWinner(playerScore,computerScore);

    /* Print the winner of the game by comparing the score*/

    function printWinner(playerScore, computerScore) {
        if (playerScore>computerScore) {
            console.log ('YOU ARE THE WINNER!')
        }
        else if (playerScore<computerScore) {
            console.log ('THE COMPUTER WON!')
        }
        else {
            console.log('YOU DRAW! WHAT ARE THE CHANCE?')
        }
    }

    /* Update the score based on the result of the round*/

    function updateScore(result) {
    
        score = (result.split(',', 1)).toString();
    
        switch (score) {
            case 'You win!':
                playerScore++;
                break;
            case 'You lose!':
                computerScore++;
                break;
            case 'You draw!':
                break;
        }
    }

    
}

