//element.addEventListener(type, callback);


class Die {

	constructor(num_sides) {
		this.num_sides = num_sides;
		this.value = null;
	}

	update() {
		 this.value = Math.floor(Math.random() * (this.num_sides) + 1);
	}

	html() {
	 	let elem = document.createElement('div');
		elem.className = 'die';
		elem.classList.add('d' + this.value);	
		return elem;
	}

}



function pageLoaded() {

	let die = new Die(6);

	let roll, elem;
	let table = gid('dice');

	for (let i = 0; i < 5; i++) {
		 
		 roll = die.update();
		 elem = die.html();
		
		 table.appendChild(elem);

		 // <div class="elem d-2"></elem>


	}

}


function gid(elem) {
	return document.getElementById(elem);
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.addEventListener("DOMContentLoaded", pageLoaded());
