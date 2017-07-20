var game = {
	currentPlayer: "user",
	user: "",
	computer: "",
	togglePlayer: function(){
		this.currentPlayer === "user" ? this.currentPlayer = "computer" : this.currentPlayer = "user";
		console.log(this.CurrentPlayer);
	}

}

game.togglePlayer();
game.togglePlayer();
