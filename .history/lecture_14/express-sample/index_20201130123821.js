const express = require('express')
const app = express()
const port = 10000


app.get('/', function(request, response) {
    response.send("Hello there!")    
})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})