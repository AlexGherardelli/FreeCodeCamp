var ex = document.getElementById('ics');
var zero = document.getElementById('zero');

var modal = document.querySelector(".modal");
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

var user = "";
var computer = "";
var currentPlayer = user;
var moves = 0;

const BOARD_SIZE = 3;
var boardStatus = new Array(BOARD_SIZE * 2 + 2);
boardStatus.fill(null);

//Switch between players
function togglePlayer() {
    currentPlayer === user ? currentPlayer = computer : currentPlayer = user;
}

// Check if move is valid
function isvalidMove(e) {
    return !e.classList.contains('clicked');
}

// Clears the board
function clear() {

    var player = arguments[0];
    //Optional Arguments
    if (arguments[0]) {
        var winner = "<h2>" + arguments[0] + " won </h2>";
    } else {
        var winner = "<h2> It was a draw! </h2>"
    }
    board.innerHTML = "<h1>Game over</h1>" + winner;

    setTimeout(function() {
        window.location.reload();
    }, 2000);
}

// Check draw
function draw() {
    if (moves === 10)
        clear();
}

// Assign a random spot for the computer
function computerPlayer() {
    var avail = boardStatus.reduce(function(a, v, i) { if (v === null) a.push(i); return a; }, []);
    var rand = avail[Math.floor(Math.random() * avail.length)];
}

// Check winning positions
function isTicTacToeWon(board, player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    )
        return true;
    else
        return false;

}
// Main game
function initGame() {
    document.addEventListener('click', function(e) {
        if (e !== null) {
            var target = document.getElementById(e.target.id);
            var validMove = isvalidMove(target);

            if (validMove) {
                target.innerText = currentPlayer;
                if (currentPlayer === "X") {
                    boardStatus[parseInt(target.id) - 1] = currentPlayer;
                } else {
                    boardStatus[parseInt(target.id) - 1] = currentPlayer;
                }
                if (isTicTacToeWon(boardStatus, currentPlayer)) {
                    clear(currentPlayer)
                }
                target.classList.add('clicked');
                moves += 1;
                console.log(boardStatus);
                togglePlayer();
            }
            draw();
        }
    });
}

ex.addEventListener("click", function(e) {
    user = e.target.innerText;
    computer = "O";
    modal.style.display = "none";
    board.style.display = "block";
    initGame();
});
zero.addEventListener("click", function(e) {
    user = e.target.innerText;
    computer = "X";
    modal.style.display = "none";
    board.style.display = "block";
    initGame();

})