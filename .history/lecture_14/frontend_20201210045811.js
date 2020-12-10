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


	let b = JSON.stringify({name: "K", location: "A"});

	fetch(`${API_URL}`, {
		method: 'POST',
		headers:{
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: "name=A1&location=B1"
	})
	.then(response => response.text())
    .then(data => {
    	console.log("POST RESPONSE: " + data)
    })
    .catch(err => console.error(err))
}