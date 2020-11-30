const express = require("express");
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);
/*
io.on("connection", (socket) => {
    console.log(socket + 'A socket has connected');

// make callback function
    socket.on("client submit chat message", ({ data }) => {

        socket.broadcast.emit("server send message", { data: data });
    });

});
*/

const users = {}

io.on('connection', socket => {
    socket.on('new-user', name => {
        users[socket.id] = name
        socket.broadcast.emit('user-connected', name)
    })

    socket.on('send-chat-message', message => {
        socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
    })

    socket.on('disconnect', () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })
})



app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/chat.html")
});




server.listen(8080, (error) =>{
    if (error) throw new Error (error);
    console.log(`server startet on port 8080`)
})

