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

	// We pass request data in body
	let data = {
		name: "Mati",
		location: "Tartu"
	};

	let data = new FormData();
	data.append("name", "Mati");
	data.append("location", "Tartu");


	fetch(`${API_URL}`, {
		method: 'POST',
		body: JSON.stringify(data),
		
	})
	.then(response => response.text())
    .then(data => {
    	console.log("POST RESPONSE: " + data)
    })
    .catch(err => console.error(err))
}