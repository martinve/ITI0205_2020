const express = require('express')
const app = express()
const port = 10000


app.get('/', (req, res) => {

    let name = req.query['name'] || "person with no name"
    let age = req.query['age'] 

    res.send(`Hello ${name}, nice to see you! You are ${age} years old`)    
})


app.post('/', (req, res) => {
   
    let name = req.body['name'] 
    let age = req.body['age']

    res.send(`POST: Hello ${name}, nice to see you! You are ${age} years old`)    

})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})