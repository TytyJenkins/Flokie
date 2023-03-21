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

let removePoint = (e) => {
    let spawnedPoint = document.querySelectorAll('.point');
    let arrayPoint = Array.from(spawnedPoint);
    
    arrayPoint.forEach(
        function (index){
            console.log(index)
            if (index.id == e) {
                index.remove()
            }
        }
     );
}

let pointSpawn = () => {
    let spawn = setInterval(function(){
        
        let box = getPointCoord();
        gameBox.innerHTML += '<button onclick="removePoint(' + box[1] + box[0] + ')" id="' + box[1] + box[0] + '" class="point" style="top:' + box[1] +'px; left:' + box[0] +'px;" type="button"></button>';

      },1000);
    setTimeout (function() { clearInterval(spawn);}, 3000);
    
}

// events
// -----------------------------
btnPlay.addEventListener('click', pointSpawn);

