document.querySelector("#facts").chicken.addEventListener("click", chicken);

function chicken(){
	document.querySelector("#outfacts").innerHTML = "<b>" + "Chickens are descended from dinosaurs!" + "</b>" +" <img src='img/chicken.jpg' id = 'pic' alt='a nice chicken'>";
	
}

document.querySelector("#facts").horse.addEventListener("click", horse);

function horse(){
	document.querySelector("#outfacts").innerHTML = "<b>" + "Horses can sleep both lying down and standing up!" + "</b>" + "<img src='img/horse.jpg' id = 'pic' alt='horse with derpy face'>";

}

document.querySelector("#facts").cow.addEventListener("click", cow);

function cow(){
	document.querySelector("#outfacts").innerHTML = "<b>" + "A cow will chew about 50 times in a minute, making their jaws move about 40,000 times a day!" + "</b>" + "<img src='img/cow.jpg' id = 'pic' alt='black and white spotted cow'>";

}

document.querySelector("#facts").donkey.addEventListener("click", donkey);

function donkey(){
	document.querySelector("#outfacts").innerHTML = "<b>" + "Donkeys can see all four of their feet at the same time!" + "</b>" + "<img src='img/donkey.jpg' id = 'pic' alt='sad donkey'>";

}

document.querySelector("#facts").pig.addEventListener("click", pig);

function pig(){
	document.querySelector("#outfacts").innerHTML = "<b>" + "Despite what you think, pigs are very clean animals!" + "</b>" + "<img src='img/pig.jpg' id = 'pic' alt='cool pig'>";
	
}