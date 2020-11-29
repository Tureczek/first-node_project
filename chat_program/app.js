const express = require('express');

// App setup
const PORT = 8080;
const app = express();

const server = require('http').createServer(app);

const io = require('socket.io')(server);


io.on('connection', (socket) => {
    console.log(`A socket has connected`);
    socket.on('client submits chat message', ({ data: message }) => {

    });
    socket.on('disconnect', () => {
        console.log('A socket disconnected')
    });
});

app.get('/chat', (req, res) => {
    return res.sendFile(__dirname + '/chat.html');
});



server.listen(PORT, (error) => {
    if(error) throw new Error(error);
    console.log(`Server running on port: ${PORT}`);
});