const express = require('express')
const app = express()
const port = 10000


app.get('/', (req, res) => {

    console.log(req)

    res.send("OK")
    //res.send(`Hello ${name}, nice to see you!`)    
})



app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})