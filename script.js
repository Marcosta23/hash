
var player = null;
var selectPlayer = document.getElementById('select-player');

changePlayer('X');
function chooseSquare (id){
    var square = document.getElementById(id);

    square.innerHTML = player;
    square.style.color = '#000';
}

function changePlayer(valor) {
    player = valor;
    selectPlayer.innerHTML = player;
}