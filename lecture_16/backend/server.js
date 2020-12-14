//We have run npm init so we have package.json file

const app = require('express')()
const http = require('http').createServer(app)

// Cors for socket.io works differently than regular Express.
// For express CORS handling check examples from lecture_14_15
const options =  {
    cors: {
        origin: "*"
    }    
}
const io = require('socket.io')(http, options)


// We can mix socket.io responses with traditional routes

app.get('/', (req, res) => {
    res.send("Server running on *:3000")
})


app.get('/demo', (req, res) => {
    res.sendFile( __dirname + "/static.html")
})




/**
 * Oletame et hoiame edetabeli tulemusi failis scores.json. 
 * Faili lugemiseks ja kirjutamiseks on meil vaja 'fs' moodulit
 */

//See peks olema faili päises
const fs = require('fs')
const scores_file = 'scores.json'


// Scoreboardi lugemine. Eeldame et andmed on failis JSONina ja oodatakse 
// ka JSON formaadis
app.get('/scores', (req, res) => {
    fs.readFile(scores_file, (err, contents) => {
        res.json(contents)
    })
})


// Scoreboardi kirjutamine. Eeldame et saadetakse POST-päringuga JSON kirje serverile
app.post('/scores', (req, res) => {
    fs.appendFile(scores_file, req.body,  (err) => {
        if(!err) {
            res.json({status: "OK"})
        }
    })
})


/*
 Kui andmebaasi kirjutada.
 - vali ja installi andmebaasiplugin mida tahad kasutada (Nt. npm install mysqljs/mysql)
 - Tee lokaalselt ühendus enda MySQL andmebaasi vastu
 - Tekita tabelid mida tahad kasutada.
 - Lisa sinna testandmeid 
 - Proovi neid lokaalsest andmebaasist lugeda
 - Tõsta tabelid Turing serverisse nagu prax3s
 - Tõsta kood turingu serverisse, muuda andmebaasi ühenduse seaded ja proovi sama teha mis lokaalselt.
*/


// Socket.io handling
const listenSocket = function(socket) {

    socket.on("say hello", (msg) => {
        console.log("Message: " + msg);

        let json = JSON.parse(msg)
        let response = `Tere ka ise, ${json.name}`

        io.emit("hello-response", response)

    })

}


io.on("connection", listenSocket);





http.listen(3000, () => {
    console.log("Listening on *:3000")
})
