const express = require('express')
const app = express()
const socketio = require('socket.io')
const PORT = 3000;
const expressServer = app.listen(PORT);
const io = socketio(expressServer);


app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

//code of socket to make connection 


io.on('connection', (socket) => {
    console.log('Connected')
    socket.on('message', (msg) => {
        socket.broadcast.emit('message', msg)
    })

})
