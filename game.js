Game = {
    level: 1,
    diffs: [90, 60, 60, 50, 50, 45, 40, 30, 25, 20], //Const
    sizes: [2, 4, 4, 6, 6], //Const
    maindiff: 15, //Const
    mainsize: 7, //Const
    init: function() {
	// Init any setup for Game
	// Start the timer
	// Display first round
	console.log("Game init");
	Game.level = 1;
	Timer.start();
	Display.showScreen(1);
	Display.setLevel(Game.level);
	Display.setBoard(Game.sizes[0], Game.diffs[0]);
	console.log("Debug - Step 3");
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
	Display.endLevel( Game.level );
	if( Game.level < 15 )
	{
	    Display.endComment("That wasn't too great; check to make sure your eyes are open. Play again?");
	}
	else if( Game.level < 25 )
	{
	    Display.endComment("Not terrible, though I'm sure you can do better. Play again?");
	}
	else if( Game.level < 35 )
	{
	    Display.endComment("That's pretty nifty, but I've seen better. Play again?");
	}
	else if ( Game.level < 45 )
	{
	    Display.endComment("Not too bad! Click \"Share\" below; can you beat your friends?")
	}
	else
	{
	    Display.endComment("That's darn good! You should be proud! Hit the Share button; brag to your friends.");
	}
	Display.showScreen(2);
	// Display the ending screen
    }
}
