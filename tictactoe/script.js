var currentPlayer = 1; //tracks current player
var plays = 0; //counts number of plays of turns taken

var board = document.querySelector("#board");

board.b0.addEventListener("click", takeTurn);
board.b1.addEventListener("click", takeTurn);
board.b2.addEventListener("click", takeTurn);
board.b3.addEventListener("click", takeTurn);
board.b4.addEventListener("click", takeTurn);
board.b5.addEventListener("click", takeTurn);
board.b6.addEventListener("click", takeTurn);
board.b7.addEventListener("click", takeTurn);
board.b8.addEventListener("click", takeTurn);

function takeTurn(){
	
	if(currentPlayer == 1 && this.value == ""){
		this.value = "X";
		this.style.color = "#f9bd2e";
		currentPlayer = 2;
		plays++;
		if(plays >= 5){
			checkWin();	
		}
	}//if
	else if(currentPlayer == 2 && this.value == ""){
		this.value = "O";
		this.style.color = "#f88379";
		currentPlayer = 1;
		plays++;
		if(plays >= 5){
			checkWin();	
		}
	}//else if
	
	console.log("plays = " + plays) 
}//end takeTurn

function checkWin(){
	if(board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value != ""){
		annouceWin(board.b0.value);
	}
	else if(board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value != ""){
		annouceWin(board.b3.value);
	}
	else if(board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b6.value != ""){
		annouceWin(board.b6.value);
	}
	else if(board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value != ""){
		annouceWin(board.b0.value);
	}
	else if(board.b1.value == board.b4.value && board.b4.value == board.b7.value && board.b1.value != ""){
		annouceWin(board.b1.value);
	}
	else if(board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b2.value != ""){
		annouceWin(board.b2.value);
	}
	else if(board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b0.value != ""){
		annouceWin(board.b0.value);
	}
	else if(board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value != ""){
		annouceWin(board.b2.value);
	}
	else if(plays == 9){
		catsGame();
	}
	
	function catsGame(){
		document.querySelector("#container").style.display = "flex";
	
	}//end cats game
	
}//end checkWin

function annouceWin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = '<img src="img/x.jpg" alt="xbutton" id="x"><h2>' + winner + ' Wins.</h2>';
	document.querySelector("#x").addEventListener("click", hidePopup);
	document.querySelector("#container").style.display = "flex";
}//end of announceWin

document.querySelector("#x").addEventListener("click", hidePopup);

function hidePopup(){
	document.querySelector("#container").style.display = "none";
}
