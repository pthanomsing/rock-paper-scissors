
function getRandom(array) {
    return element = array[Math.floor(Math.random()*array.length)];
}

function computerPlay() {

    const play = ['rock', 'paper', 'scissor'];
    return getRandom(play);
}

function play(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        switch (computerSelection) {
            case 'rock':
                result = "You draw!, Both of you chose Rock";
                break;
            case 'paper':
                result = "You lose!, Paper beats Rock"
                break;
            case 'scissors' :
                result = "You win!, Rock beats Scissors"
                break;
        }

    }
    return result;
}

