Game = {
    level: 1,
    init: function() {
	// Init any setup for Game
	// Start the timer
	// Display first round
	console.log("Game init");
	Timer.start();
	Display.showScreen(1);
	Display.setLevel(this.level);
	Display.setBoard(8, 50);
    },
    correct: function(event) {
	console.log("Correct!");

	this.level++;
	Display.setLevel(this.level);
	Display.setBoard(8, 30);
	
	event.stopPropagation();
    },
    incorrect: function() {
	console.log("Incorrect!");
    },
    timeUp: function() {
	// Display the ending screen
    }
}
