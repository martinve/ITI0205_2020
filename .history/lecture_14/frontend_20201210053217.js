const API_URL = 'http://localhost:8000';

function get_json(endpoint) {
	fetch(`${API_URL}/${endpoint}`)
		.then(response => response.json())
        .then(data => console.log("JSON response", data))
        .catch(err => console.error(err))
}



function get_text(endpoint) {
	fetch(`${API_URL}/${endpoint}`)
		.then(response => response.text())
        .then(data => console.log("TEXT response", data))
        .catch(err => console.error(err))
}



function post_data() {

	let formData = new FormData();
	formData.append("name", "Mati");
	formData.append("location", "Tartu");

	let a = {name: "K", location: "A"};
	let b = JSON.stringify(a);

	fetch(`${API_URL}/welcome`, {
		method: 'POST',
		body: a
	})
	.then(response => response.text())
    .then(data => {
    	console.log("POST RESPONSE: " + data)
    })
    .catch(err => console.error(err))
}