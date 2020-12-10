const express = require('express')
const app = express()
const port = 10000


app.get('/', (req, res) => {

    let name = req.query['name'] || "person with no name"

    res.send(`Hello ${name}, nice to see you!`)    
})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})