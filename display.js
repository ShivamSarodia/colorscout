function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

Display = {
    special: -1,
    init: function() {
	// Set up any stuff for Display
	
	document.getElementById("start-but").addEventListener("click", Game.init);
	document.getElementById("board").addEventListener("click", Game.incorrect);
	// Set up listeners for end of game buttons

	// Show start screen
	this.showScreen(0);
    },
    showScreen: function(screen) {
	switch(screen)
	{
	case 0: //Start screen
	    document.getElementById("start-screen").className = "page";
	    document.getElementById("main").className = "page invis"
	    document.getElementById("end-screen").className = "page invis";
	    break;
	case 1: //Board screen
	    document.getElementById("start-screen").className = "page invis";
	    document.getElementById("main").className = "page"
	    document.getElementById("end-screen").className = "page invis";
	    break;
	case 2: //End screen
	    document.getElementById("start-screen").className = "page invis";
	    document.getElementById("main").className = "page invis"
	    document.getElementById("end-screen").className = "page";
	    break;
	}
    },
    setTime: function(time) {
	// Change the time displayed
	console.log(time);
    },
    setLevel: function(level) {
	// Set the level displayed
    },
    setBoard: function(size, diff) {
	//Main color
	var R = Math.floor(256*Math.random());
	var G = Math.floor(256*Math.random());
	var B = Math.floor(256*Math.random());

	//Diff color
	var lab = Color.convert({r: R, g: G, b: B}, 'lab');
		
	var board = document.getElementById("board");
	board.innerHTML = "";
	
	var tilebase = document.createElement("div");
	tilebase.className = "tile-base";
	tilebase.style.width = 100/size + "%";
	tilebase.style.height = 100/size + "%";
	tilebase.style.padding = 7/size + "%";
	
	var tile = document.createElement("div");
	tile.className = "tile";
	tile.style.backgroundColor = "rgb("+R+","+G+","+B+")";
	
	tilebase.appendChild(tile);
	
	for(i = 0; i < size*size; i++)
	{
	    board.appendChild(tilebase.cloneNode(true));
	}

	this.special = Math.floor(board.childNodes.length*Math.random());
	board.childNodes[this.special].firstChild.addEventListener("click", Game.correct);
	
	var x = Math.random() * diff;
	var y = Math.random() * diff;
	var dR = Math.floor(Math.sign(Math.random()-0.5)*Math.min(x,y));
	var dG = Math.floor(Math.sign(Math.random()-0.5)*Math.max(x,y));
	var dB = Math.floor(Math.sign(Math.random()-0.5)*(diff - Math.max(x,y)));
	console.log(dR, dG, dB);
	board.childNodes[this.special].firstChild.style.backgroundColor = "rgb("+(R+dR)+","+(G+dG)+","+(B+dB)+")";
    }
}

Display.init();
