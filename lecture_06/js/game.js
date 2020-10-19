let min = 1;
let max = 100;

let turn = 1;


let message;

const MAX_TURNS = 10;
let correct;


/*
 * @see https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
*/
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function makeGuess() {

	let guess = gid('user-guess').value;
	guess = parseInt(guess);

	if (isNaN(guess)) {
		return "Please enter a number";
	}


	if (turn > MAX_TURNS) {
		resetGame();
	}


	if (guess == correct) {
		return winGame();
	}

	message = turn + ". Your guess " + guess;
	if(guess > correct) {
		message += " was too much";
	} else {
		message += " was too little";
	}

	showResult(message);

	turn++;

	if (turn > MAX_TURNS) {
		loseGame();
	}

}


function winGame() {
	message = 'Congrats! You won in ' + turn + ' turns!';
	endGame(message, 'win');
}


function loseGame() {
	message = 'Sorry, you lost :( Better luck next time.';
	endGame(message, 'lose');
}


function showResult(message) {
	let el = document.createElement('li');
	el.innerText = message;
	gid('result-list').appendChild(el);
}


function endGame(message, type) {
	gid('game-result').innerText = message;
	gid('game-result').classList.add(type);
}



function resetGame() {
	correct = randomIntFromInterval(min, max);
	gid('result-list').innerHTML = null;
	gid('game-result').innerText = null;
	turn = 1;
}



document.addEventListener("DOMContentLoaded", function() {
	resetGame();
	gid('instructions').innerText = `Guess the number between ${min} and ${max} in ${MAX_TURNS} turns`;
});



function gid(elem) {
	return document.getElementById(elem);
}