const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);



io.on('connection', (socket) => {
    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', message)
    });
});


server.listen(8080, (error) =>{
    if (error) throw new Error (error);
    console.log(`server startet on port 8080`)
})

