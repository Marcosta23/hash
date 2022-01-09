
var player, winner = null;
var selectPlayer = document.getElementById('select-player');
var squares = document.getElementsByClassName('square');
var selectWinner = document.getElementById('winner-player');
var partidas = 0;

changePlayer('X');

function chooseSquare (id){
if(winner !== null){
   
    return
}

    var square = document.getElementById(id);
     if(square.innerHTML !== '-'){
        return;
    }
    square.innerHTML = player;
    square.style.color = '#000';

    
        if(player === 'X'){
            player = 'O'

        }else{
            player = 'X'
        }
        changePlayer(player);
        checked();
    }

function changePlayer(valor) {
    player = valor;
    selectPlayer.innerHTML = player;

}

function checked(){
    var sq1 = document.getElementById(1);
    var sq2 = document.getElementById(2);
    var sq3 = document.getElementById(3);
    var sq4 = document.getElementById(4);
    var sq5 = document.getElementById(5);
    var sq6 = document.getElementById(6);
    var sq7 = document.getElementById(7);
    var sq8 = document.getElementById(8);
    var sq9 = document.getElementById(9);

    if (checkSeq(sq1, sq2, sq3)) {
        changeColorSquare(sq1, sq2, sq3);
        changeWinner(sq1);
        return;
    }

    if (checkSeq(sq4, sq5, sq6)) {
        changeColorSquare(sq4, sq5, sq6);
        changeWinner(sq4);
        return;
    }

    if (checkSeq(sq7, sq8, sq9)) {
        changeColorSquare(sq7, sq8, sq9);
        changeWinner(sq7);
        return;
    }

    if (checkSeq(sq1, sq4, sq7)) {
        changeColorSquare(sq1, sq4, sq7);
        changeWinner(sq1);
        return;
    }

    if (checkSeq(sq2, sq5, sq8)) {
        changeColorSquare(sq2, sq5, sq8);
        changeWinner(sq2);
        return;
    }

    if (checkSeq(sq3, sq6, sq9)) {
        changeColorSquare(sq3, sq6, sq9);
        changeWinner(sq3);
        return;
    }

    if (checkSeq(sq1, sq5, sq9)) {
        changeColorSquare(sq1, sq5, sq9);
        changeWinner(sq1);
        return;
    }

    if (checkSeq(sq3, sq5, sq7)) {
        changeColorSquare(sq3, sq5, sq7);
        changeWinner(sq3);
    }
}


function changeWinner(square) {
    winner = square.innerHTML;
    selectWinner.innerHTML= winner;
    if(winner === 'X'){
        console.log(winner);

    }
}

function changeColorSquare(sq1,sq2,sq3){
    sq1.style.background = '#0f0';
    sq2.style.background = '#0f0';
    sq3.style.background = '#0f0';
}

function checkSeq(sq1, sq2, sq3) {
    var compare = false;

    if (sq1.innerHTML !== '-' && sq1.innerHTML === sq2.innerHTML && sq2.innerHTML === sq3.innerHTML) {
        compare = true;
    }

    return compare;
}

function reStart(){
    partidas++;
       winner = null;
    selectWinner.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var square = document.getElementById(i);
        square.style.background = '#eee';
        square.style.color = '#eee';
        square.innerHTML = '-';
        
    }
  
   console.log("partidas " + partidas)
if (partidas%2 === 0){

    changePlayer('X');
}else{
console.log("xau")
    
}
}