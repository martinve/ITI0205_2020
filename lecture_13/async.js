/* Asynchronous code example */

console.log("1. Starting the app");

setTimeout(() => {
	console.log("2. Step 1");
}, 2000);

setTimeout(() => {
	console.log("3. Step 2");	
}, 0);


console.log("4. Completing the app");