
function getRandom(array) {
    return array[Math.floor(Math.random()*array.length)];
}

function computerPlay() {

    const play = ['rock', 'paper', 'scissors'];
    return getRandom(play);
}

function play(playerSelection, computerSelection) {
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
                    result = "You draw! Both of you chose Paper";
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
                    result = "You win! Scissors beats Paper";
                    break;
                case 'scissors':
                    result = "You draw! Both of you chose Scissors";
                    break;
            }
            break;
        default:
            result = "Please choose Rock, Paper or Scissors!";

    }
    return result;
}
