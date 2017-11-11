var Player = {
    name: '',
    sign: '',
    thirdVariableIDontRemember: ''
};

var user = "X";
var computer = "O";
var currentPlayer = user;

var moves = 0;

var board = document.querySelector(".board");
// var one = document.getElementById('1');
// var two = document.getElementById('2');
// var three = document.getElementById('3');
// var four = document.getElementById('4');
// var five = document.getElementById('5');
// var six = document.getElementById('6');
// var seven = document.getElementById('7');
// var eight = document.getElementById('8');
// var nine = document.getElementById('9');

var boardStatus = new Array(3 * 2 + 2);
boardStatus.fill(null);

//Switch between players
function togglePlayer() {
    currentPlayer === user ? currentPlayer = computer : currentPlayer = user;
}

// Check if move is valid
/*
Describe here what this function is supposed to do
*/
function isvalidMove(e) {
    return !e.classList.contains('clicked');
}

// Clears the board
function clear() {
    board.innerHTML = "<h1>Game over</h1>";
    setTimeout(function() {
        window.location.reload();
    }, 2000);
}

// Check draw
function draw() {
    console.log(moves);
    if (moves === 9)
        clear();
}


// function computerPlayer() {
//     for (var i in avail) {
//         console.log(avail[i].innerText)
//     };
// }

// Check who won
function winnerIs() {
    pass;
}


// Main game
document.addEventListener('click', function(e) {
    if (e !== null) {
        var target = document.getElementById(e.target.id);
        var validMove = isvalidMove(target);
        if (validMove) {
            target.innerText = currentPlayer;
            if (currentPlayer === "X") {
                boardStatus[parseInt(target.id) - 1] = 1;
            } else {
                boardStatus[parseInt(target.id) - 1] = 2;
            }
            console.log(boardStatus);
            target.classList.add('clicked')
            moves += 1;
            togglePlayer();
        }
        draw();
        console.log("Currently playing as " + currentPlayer);
    }

});