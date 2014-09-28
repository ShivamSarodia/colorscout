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
	document.getElementById("share-but").addEventListener("click", Display.share);
	document.getElementById("play-again-but").addEventListener("click", Game.init);

	// Show start screen
	this.showScreen(0);
    },
    share: function() {
	window.location = "https://www.facebook.com/sharer/sharer.php?u=http://shivamsarodia.github.com/colors";
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
	    document.getElementById("level").innerHTML = "L1";
	    document.getElementById("time").innerHTML = "1:00";
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
	var prefix = time.toString().length == 2 ? "0:" : "0:0"
	document.getElementById("time").innerHTML = prefix+time;
    },
    setLevel: function(level) {
	document.getElementById("level").innerHTML = "L"+level;
    },
    setBoard: function(size, diff) {
	//Main color
	var rgb = {r: Math.floor(diff + (255-2*diff)*Math.random()),
		   g: Math.floor(diff + (255-2*diff)*Math.random()),
		   b: Math.floor(diff + (255-2*diff)*Math.random())};

	var sign = Math.random()-0.5 > 0 ? 1 : -1
	var rgb1 = {r: rgb["r"] + sign*diff,
		    g: rgb["g"] + sign*diff,
		    b: rgb["b"] + sign*diff};

	//Diff color
	var board = document.getElementById("board");
	board.innerHTML = "";

	var tilebase = document.createElement("div");
	tilebase.className = "tile-base";
	tilebase.style.width = 100/size + "%";
	tilebase.style.height = 100/size + "%";

	var tile = document.createElement("div");
	tile.className = "tile";
	tile.style.backgroundColor = "rgb("+rgb["r"]+","+rgb["g"]+","+rgb["b"]+")";

	tilebase.appendChild(tile);

	for(i = 0; i < size*size; i++)
	{
	    board.appendChild(tilebase.cloneNode(true));
	}

	console.log("Debug 8");
	this.special = Math.floor(board.childNodes.length*Math.random());
	board.childNodes[this.special].firstChild.addEventListener("click", Game.correct);
	board.childNodes[this.special].firstChild.style.backgroundColor = "rgb("+rgb1["r"]+","+rgb1["g"]+","+rgb1["b"]+")";
	console.log("Debug 9");
    },

    endLevel: function(lev) {
	document.getElementById("level-span").innerHTML = "Level " + lev;
    },

    endComment: function(comment) {
	document.getElementById("comment-span").innerHTML = comment;
    }
}

Display.init();
