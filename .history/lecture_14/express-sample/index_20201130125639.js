const express = require('express')
const app = express()
const port = 10000


app.get('/', (req, res) => {
    response.send("Hello there! I have been updated")    
})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})