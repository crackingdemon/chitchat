const express = require('express')
const app = express()
const https = require('https').createServer(app)

const PORT = process.env.PORT || 6969

https.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//code of socket to make connection 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})
