(function() {


for (var i =0 ; i < 18; i++)
{
	for (var j = 0; j < 16; j++)
	{
		
		var tile = document.createElement("div");
		tile.style.width = "4%";
		tile.style.height = "60px";
		tile.style.background = "white";
		tile.style.float = "left";
		tile.style.borderWidth= "1px";
		tile.style.borderColor= "black";
		tile.style.borderStyle= "solid";
		document.body.appendChild(tile);
	}
}

})();

var tiles = document.querySelectorAll("div");
var selected;

	tiles[0].style.background = "red";
	tiles[0].addEventListener("click", function(){

		selected = "red";
	})

	tiles[1].style.background = "orange";
	tiles[1].addEventListener("click", function(){

		selected = "orange";
	})
	
	tiles[2].style.background = "yellow";
	tiles[2].addEventListener("click", function(){

		selected = "yellow";
	})

	tiles[3].style.background = "green";
	tiles[3].addEventListener("click", function(){

		selected = "green";
	})

	tiles[4].style.background = "blue";
	tiles[4].addEventListener("click", function(){

		selected = "blue";
	})

	tiles[5].style.background = "indigo";
	tiles[5].addEventListener("click", function(){

		selected = "indigo";
	})

	tiles[6].style.background = "violet";
	tiles[6].addEventListener("click", function(){

		selected = "violet";
	})


for (var i = 7; i < tiles.length; i++) {

	// tiles[0].style.background = "red";
	// tiles[1].style.background = "green";


	tiles[i].addEventListener("click", function(){

		this.style.background = selected;

	})
}


// var startingFunction = 

// (function() {


// for (var i =0 ; i<9; i++)
// {
// 	for (var j = 0; j < 8; j++)
// 	{
// 				if(j%2 === 0) {
		
// 		var tile = document.createElement("div");
// 		tile.style.width = "11%";
// 		tile.style.height = "100px";
// 		tile.style.background = "red";
// 		tile.style.float = "left";
// 		document.body.appendChild(tile);
// 	}
// 	else
// 	{
// 		var tile = document.createElement("div");
// 		tile.style.width = "11%";
// 		tile.style.height = "100px";
// 		tile.style.background = "black";
// 		tile.style.float = "left";
// 		document.body.appendChild(tile);
// 	}
// 	} 
// }

// })();

// document.addEventListener("DOMContentLoaded", startingFunction);