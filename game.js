Game = {
    level: 1,
    diffs: [90, 60, 60, 50, 50, 45, 40, 30, 25, 20],
    sizes: [2, 4, 4, 6, 6],
    maindiff: 15,
    mainsize: 7,
    init: function() {
	// Init any setup for Game
	// Start the timer
	// Display first round
	console.log("Game init");
	Timer.start();
	Display.showScreen(1);
	Display.setLevel(Game.level);
	Display.setBoard(Game.sizes[0], Game.diffs[0]);
    },
    correct: function(event) {
	console.log("Correct!");

	Game.level++;
	Display.setLevel(Game.level);
	var size = (Game.level > Game.sizes.length) ? Game.mainsize : Game.sizes[Game.level - 1];
	var diff = (Game.level > Game.diffs.length) ? Game.maindiff : Game.diffs[Game.level - 1];
	Display.setBoard(size, diff);
	
	event.stopPropagation();
    },
    incorrect: function() {
	console.log("Incorrect!");
    },
    timeUp: function() {
	// Display the ending screen
    }
}
