const express = require("express");
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on("connection", (socket) => {
    console.log(socket + 'A socket has connected');

// make callback function
    socket.on("client submit chat message", ({ data }) => {

        socket.broadcast.emit("server send message", { data: data });
    });

});





app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/chat.html")
});



server.listen(8080, (error) =>{
    if (error) throw new Error (error);
    console.log(`server startet on port 8080`)
})

