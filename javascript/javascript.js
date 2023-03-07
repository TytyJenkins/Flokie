// variables
// -----------------------------
let btnPlay = document.getElementById('btnPlay');
let gameBox = document.getElementById('gameBox');


// functions
// -----------------------------
let getRandowCoord = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) + min);
}

let getPointCoord = () => {
    let boxSize = gameBox.getBoundingClientRect();
    let boxWidth = getRandowCoord(0, (gameBox.offsetWidth - 15));
    let boxHeight = getRandowCoord(0, (gameBox.offsetHeight - 15));
    let boxContent = [boxWidth, boxHeight];

    return boxContent;
}


let pointSpawn = () => {
    let boxSize = gameBox.getBoundingClientRect();
    console.log(gameBox.offsetHeight);
    let box = getPointCoord();
    gameBox.innerHTML += '<div class="point" style="top:' + box[1] +'px; left:' + box[0] +'px;"></div>';
}



// events
// -----------------------------
btnPlay.addEventListener('click', pointSpawn);
