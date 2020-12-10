const http = require('http')

const port = 9002
const host = "127.0.0.1"


const server = http.createServer((req, res) => {
	res.statusCode = 200
	res.setHeader('Content-type', 'text/html')
	res.end("Hello World :)")
})


server.listen(port, () => {
	console.log("Server running at " + host + ":" + port)
})