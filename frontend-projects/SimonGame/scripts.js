/***************************************************************
					SIMON'S GAME
***************************************************************/

(function(){
    /****************
     * MODEL OBJECT (DATA)
    ****************/
    const model = {
        audio: {
            blue: "sounds/simonSound1.mp3",
            yellow: "sounds/simonSound2.mp3",
            green: "sounds/simonSound3.mp3",
            red: "sounds/simonSound4.mp3"
        },
        gameSequence: [],
        userSequence: [],
        round: 1,
        endGame: 20,
        strict: false 
    };
    /****************
     * VIEW OBJECT (UI)
    ****************/
    const view = {
        // Select DOM and initialize other view functions
        init(){
            this.buttons = document.querySelectorAll(".btn");
            this.display = document.querySelector(".display");
            this.toggleStrict = document.querySelector(".toggle__input");

            this.displayMessage(controller.getRound());
            this.playerActions();
        },
        // Handle player clicking on buttons and add buttons to user sequence
        playerActions() {
            view.buttons.forEach(button => {
                button.addEventListener("click", () => {
                    this.animate(button);
                    controller.playAudio(button.id);
                    controller.addUserMove(button.id);
                    controller.checkGame(button.id);
                    this.displayMessage(controller.getRound());
                });
            });
        },
        // Handle animation for buttons
        animate(e) { 
            e.classList.add("flash");
            setTimeout(() => {
                e.classList.remove("flash");
            }, 500)
        },
        // Display rounds
        displayMessage(message) {
            view.display.innerText = message;
        },
        // Helper function to animate computer's turn
        targetButton(color){
            this.buttons.forEach(button => {
                if(button.id === color){
                    view.animate(button);
                }
            })
        },
        // Check if strict button is on
        isStrict(){
    this.toggleStrict.checked
        ? controller.enableStrict()
    : controller.normalMode();

        }

    };


    /****************
     * CONTROLLER OBJECT (LOGIC)
    ****************/
    const controller = {
        // initialize view and start game
        init(){
            view.init();
            this.startGame();
        },
        // Make use game starts with clear status
        startGame(){
            this.clearGame();
        },

        // Clears game
        clearGame(){
            model.gameSequence = [];
            model.round = 0;
            this.addRound();
            this.generateNextMove();
        },
        // Adds a round
        addRound(){
            view.isStrict();
            model.round++;
            this.generateNextMove();
        },  
        // Return game round number
        getRound(){
            return model.round;
        },
        // Enable strict mode
        enableStrict(){
            console.log("Strict mode enabled");
            model.strict = true;
        },
        // Enable normal mode
        normalMode(){
            console.log("Normal mode enabled");
            model.strict = false;
        },
        //   Generate a random color between those provided
        getRandom() {
            let colors = ["blue", "red", "green", "yellow"];
            let rand = Math.floor(Math.random() * Math.floor(colors.length));
            return colors[rand];
        },
        // Generate a new move, append to game sequences and plays the entiree sequence
        generateNextMove() {
            const newMove = controller.getRandom();
            model.gameSequence.push(newMove);
            this.showMovesToPlayer();
        },
        // Play all game sequence to player
        showMovesToPlayer() {
            let i = 0;
            let moves = setInterval(() => {
                view.targetButton(model.gameSequence[i]);
                controller.playAudio(model.gameSequence[i]);
                i++;
                if (i >= model.gameSequence.length) {
                    clearInterval(moves);
                }
            }, 800);

            this.clearPlayer();
        },
        // Clear player sequence
        clearPlayer(){
            model.userSequence = [];
        },
        // Helper function to play audio of a button
        playAudio(btn) {
            let audio = new Audio(model.audio[btn]);
            audio.play();
        },
        // Add user move to user sequence
        addUserMove(btn){
        return model.userSequence.push(btn);
        },
        // Game logic: validate moves and check when game ends
        checkGame(btn){
            let currPlayer = model.userSequence[model.userSequence.length - 1];
            let currGame = model.gameSequence[model.userSequence.length - 1];
            if(currPlayer !== currGame){
                alert("Wrong. Again!");
                if(model.strict){
                    alert("Wrong. Start from scratch!");
                    this.startGame();
                }
                this.showMovesToPlayer();
            } else{
                if(model.userSequence.length === model.gameSequence.length){
                    if (model.round === model.endGame){
                        alert("You won!");
                        this.startGame();
                    }
                    else{
                        this.addRound();
                    }
                }
            }
        }

    };

    // Initialize the whole shbang!
    controller.init();

})();