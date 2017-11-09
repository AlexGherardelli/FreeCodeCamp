$(document).ready(function() {
    // START HERE
    var Player = {
        name: '',
        sign: '',
        thirdVariableIDontRemember: ''
    };

    var user = "X";
    var computer = "O";
    var currentPlayer = user;
    var moves = 1;
    var board = $(".board");


    /* 
    Switch between players
    */
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

    // Check if game is over
    /*
    Describe here what this function is supposed to do
    */
    function gameOver() {
        function clear() {
            setTimeout(function() {
                board.text("Game over");
                window.location.reload();
            }, 1500);
        }
        if (moves === 9)
            clear();

    }


    // Check who won
    /*
    Describe here what this function is supposed to do
    */

    // Main game
    document.addEventListener('click', function(e) {
        gameOver();
        var target = document.getElementById(e.target.id);
        var validMove = isvalidMove(target);
        if (validMove) {
            target.innerText = currentPlayer;
            target.classList.add('clicked')
            moves += 1;
            togglePlayer();
        }
        console.log("Currently playing as " + currentPlayer);
    });
});