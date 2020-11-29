const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    console.log(socket + ' A socket connected');
    socket.on("client changed color", ({ data }) => {
        //Brodcasts to all sockets including self
        io.emit("server sending the color", { data: data });

        // Only emits to the socket in this very callback
//        socket.emit("server sending the color", { data: data });
        /*
        io.on("disconnect", () => {
            console.log("A socket disconnected. Byeeeeee!")
        })
        */
        // Broadcast to all but it self
        //socket.broadcast.emit("server sending the color", { data: data });
    });

});

app.get('/', (req, res) => {
    return res.send({ data: 'ok' });
});

app.get('/colorpicker', (req, res) => {
    return res.sendFile(__dirname + '/colorPicker.html');
});


server.listen(8080, (error) => {
    if (error) throw new Error(error);
    console.log('Server running on port 8080');
});