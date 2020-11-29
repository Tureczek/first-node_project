const express = require('express');
const app = express();
const server = require('http').createServer(app)
const io = require("socket.io")(server)

// Every time a user loads the website, it's going to call this function, which gives
// each user it's own socket.
io.on('connection', socket => {
    //Send a message to the given user
                // event name,   paramater / data
    socket.emit('chat-message', 'Hello World')
});


app.get("/", (req, res) => {
    return res.send({ message: "OK"})
});



app.listen(80, (error) =>{
    if(error) throw new Error(error);
    console.log(`server started on port 80`)
});