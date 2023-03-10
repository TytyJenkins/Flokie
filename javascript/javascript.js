// variables
// -----------------------------
let btnPlay = document.getElementById('btnPlay');
let btnStop = document.getElementById('btnStop');
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
    let boxWidth = getRandowCoord(0, (gameBox.offsetWidth - 30));
    let boxHeight = getRandowCoord(0, (gameBox.offsetHeight - 30));
    let boxContent = [boxWidth, boxHeight];

    return boxContent;
}

let clearAllPoint = () => {
    let spawnedPoint = document.getElementsByClassName('point');
    spawnedPoint.remove();
}

let pointSpawn = () => {
    let spawn = setInterval(function(){
        let boxSize = gameBox.getBoundingClientRect();
        let box = getPointCoord();
        gameBox.innerHTML += '<div id="' + box[1] + box[0] + '" class="point" style="top:' + box[1] +'px; left:' + box[0] +'px;"></div>';
      },1000);
    setTimeout (function() { clearInterval(spawn);}, 3000);
}

// events
// -----------------------------
btnPlay.addEventListener('click', pointSpawn);
btnStop.addEventListener('click', clearAllPoint);



