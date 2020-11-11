let counter;

let person  = {
  firstName: "John",
  lastName: "Smith",
};



function gid(elem) {
	return document.getElementById(elem);
}



function reset() {
	console.log("Clearing storage");
	localStorage.clear();
	showCounter(0);
}



function save() {
	console.log("Saving person");
	localStorage.setItem('person', JSON.stringify(person));
}



function showCounter(val) {
	gid('load-count').innerText = val;
}




function pageLoaded() {

	let x = localStorage.getItem('counter') || 0;


	counter = 1 + parseInt(x);

	localStorage.setItem('counter', counter);

	let p = localStorage.getItem('person');
	p = JSON.parse(p);

	console.log(p);
	console.log(p.firstName);


	showCounter(counter);
	
}




document.addEventListener("DOMContentLoaded", pageLoaded);
