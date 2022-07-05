
function getRandom(array) {
    return element = array[Math.floor(Math.random()*array.length)];
}

function computerPlay() {

    const play = ['rock', 'paper', 'scissor'];
    return getRandom(play);
}