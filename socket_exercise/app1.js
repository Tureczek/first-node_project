const express = require('express');
const app1 = express();

const server = require('http').createServer(app1);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log(socket + 'A socket has connected');
    socket.on("client send message", ({ data }) => {

        //Broadcast to all including self
        io.emit("Server sending message", { data: data });

        // Broadcast to all but it self
        //socket.broadcast.emit("server sending the message", { data: data })
        socket.on("Client submit chat message", { data: data });
    });

});

app1.get("/", (req, res) => {
    return res.send({ message: "OK" })
});


app1.get("/chat", (req, res) => {
   return res.sendFile(__dirname + "/pages/chat.html")
});



app1.listen(80, (error) =>{
    if (error) throw new Error (error);
    console.log(`server startet on port 80`)
})