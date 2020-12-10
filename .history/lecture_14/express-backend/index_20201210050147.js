const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') 

const app = express()
const port = 8000

app.use(cors())	//Enable CORS

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies


app.get('/', (req, res) => {

    let name = req.query['name'] || "person with no name"
    let age = req.query['age'] || 99

    res.end(`Hello ${name}, nice to see you! You are ${age} years old`)    

    /*
     * @see "Response Methods" chapter in ttps://expressjs.com/en/guide/routing.html for possible responses
     */
})


app.get('/json', (req,res) => {
	let gameState = {
		'turn': 1,
		'player': 2
	}
	res.json(gameState);
})


app.get('/json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
});



app.post('/', (req, res) => {

    let name = req.body.name
    let location = req.body.location
    console.log({name: name, location: location})

    res.json({greeting: `Hello ${name}, nice that you are from ${location}.`})    
})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})