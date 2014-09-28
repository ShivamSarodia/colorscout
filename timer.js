Timer = {
    time: 0,
    start: function() {
	console.log("Started timer");
	Timer.time = 60;
	setTimeout(Timer.tick, 1000);
    },
    tick: function() {
	Timer.time--;

	if(Timer.time == 0)
	{
	    Display.setTime(Timer.time);
	    Timer.end();
	}
	else
	{
	    Display.setTime(Timer.time);
	    setTimeout(Timer.tick, 1000);
	}
    },
    end: function() {
	Game.timeUp();
	console.log("Timer: time's up");
	//Do anything else to end the game
    }
}
