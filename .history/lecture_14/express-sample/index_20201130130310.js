const express = require('express')
const app = express()
const port = 10000


app.get('/', (req, res) => {

    let name = req.params['name']
    console.log("Name: name");

    res.send(`Hello ${name}, nice to see you!`)    
})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})