var model = {
  computer: "",
  user: "",
  currentPlayer: this.user,
  moves: 1,
  gameStatus: new Array(3 * 2 + 2).fill(0),
  boardStatus: new Array(9).fill(null),

};

var view = {
  init: function(){
    this.board = document.querySelector(".board");4
    this.modal = document.querySelector(".modal");
    this.squares = document.querySelectorAll(".square");
    this.symbols = document.getElementsByClassName("sign");

    this.assignPlayer(this.symbols);
    this.drawSign();
  },
  assignPlayer: function(symbols){
    symbols[0].addEventListener("click", function(){
        octopus.setUserSign(symbols[0]);
        octopus.setComputerSign(symbols[1]);
        view.modal.style.display = "none";
        view.board.style.display = "block";
    });
    symbols[1].addEventListener("click", function(){
      octopus.setUserSign(symbols[1]);
      octopus.setComputerSign(symbols[0]);
      view.modal.style.display = "none";
      view.board.style.display = "block";
  });

  },
  drawSign: function(){

    view.squares.forEach(function(square){
      square.addEventListener("click", function(){
          octopus.checkDraw();
          if(octopus.isValidMove(square)){
            square.innerText = octopus.getCurrentPlayer();
            square.classList.add('clicked');
            octopus.updateMoves(square);
            octopus.checkWin(octopus.getCurrentPlayer());
            octopus.togglePlayer();
            octopus.computerPlays();
          }
      })
    });
    
},
  clearGame: function(message){
    this.board.innerHTML = "<h2>" + message + "</h2>";
    setTimeout(function() {
      window.location.reload();
  }, 2000);
  }
}

var octopus = {
  init: function(){  
    view.init();
  },
  setUserSign: function(sign){
    model.user = sign.innerText;
    model.currentPlayer = model.user;
  },
  setComputerSign: function(sign){
    model.computer = sign.innerText;
  },
  getCurrentPlayer: function(){
    return model.currentPlayer;
  },
  setCurrentPlayer: function(player){
    model.currentPlayer = player;
  },
  togglePlayer: function(currentPlayer){
    model.currentPlayer === model.user ? model.currentPlayer = model.computer : model.currentPlayer = model.user;
  },
  updateMoves: function(square){
    model.boardStatus[square.id - 1] = square.innerText;
    model.moves++;
  },
  isValidMove: function(e){
    return !e.classList.contains('clicked');
  },
  checkDraw: function(){
    if(model.moves === 9){
      view.clearGame("It's a draw");
    }
  },
  checkWin: function(player){
    var board = model.boardStatus;
    if(
      (board[0] === player && board[1] === player && board[2] === player) || // Check rows
      (board[3] === player && board[4] === player && board[5] === player) ||
      (board[6] === player && board[7] === player && board[8] === player) ||
      (board[0] === player && board[3] === player && board[6] === player) || // Check columns
      (board[1] === player && board[4] === player && board[7] === player) || 
      (board[2] === player && board[5] === player && board[8] === player) ||
      (board[0] === player && board[4] === player && board[8] === player) ||
      (board[2] === player && board[4] === player && board[6] === player)
    )
    {
      view.clearGame(player + " has won");
    }
  },
  computerPlays: function(){
    var avail = model.boardStatus.reduce(function(a, v, i) { if (v === null) a.push(i); return a; }, []);
    rand = avail[Math.floor(Math.random() * avail.length)];
    if(this.isValidMove(view.squares[rand])){
      view.squares[rand].innerText = model.computer;
      this.updateMoves(view.squares[rand]);
      this.checkWin(octopus.getCurrentPlayer());
      this.togglePlayer();
    }
  }

}


octopus.init();