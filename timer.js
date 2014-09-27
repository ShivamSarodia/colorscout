Timer = {
    time: 60,
    start: function() {
	console.log("Started timer");
	setTimeout(Timer.tick, 1000);
    },
    tick: function() {
	Timer.time--;

	if(Timer.time == 0)
	{
	    Display.setTime(Timer.time);
	    //End the game!
	}
	else
	{
	    Display.setTime(Timer.time);
	    setTimeout(Timer.tick, 1000);
	}
    },
    end: function() {
	// Game.timeUp()
	// end the timer
    }
}
