(function () {
    // START HERE
    var user = "X";
    var computer = "O";
    var currentPlayer = user;
    var moves = 1;
    var board = document.querySelector(".board");
    var one = document.getElementById('1');
    var two = document.getElementById('2');
    var three = document.getElementById('3');
    var four = document.getElementById('4');
    var five = document.getElementById('5');
    var six = document.getElementById('6');
    var seven = document.getElementById('7');
    var eight = document.getElementById('8');
    var nine = document.getElementById('9');
    window.one = one;
    window.two = two;
    window.three = three;

    var avail = [one, two, three, four, five, six, seven, eight, nine];
    window.avail = avail;

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

    // Check if game is over
    /*
    Describe here what this function is supposed to do
    */
    function gameOver() {
        if (moves === 9)
            clear();
        if(one.classList.contains('clicked') && two.classList.contains('clicked') && three.classList.contains('clicked') && one.innerText === two.innerText && two.innerText === three.innerText){
            console.log("winning position");
            // clear();
        }
    }

    // Clear window board and declare Game Over
    function clear() {
        setTimeout(function() {
            board.text("Game over");
            window.location.reload();
        }, 1500)
    }

    function computerPlayer(){
        for(var i in avail){ 
            console.log(avail[i].innerText)
        };
    }

    // Check who won
    function winnerIs(){
        pass;
    }


    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("DOM fully loaded and parsed");
    });
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

})();


