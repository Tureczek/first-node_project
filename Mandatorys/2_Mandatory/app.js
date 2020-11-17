const express = require("express");
const app = express();

const port = process.env.PORT || 80;

app.listen(port, (error)=>{
    if (error) {
        console.log(`Server couldn't start, error: ${error}`);
    } else {
        console.log(`Server started on ${port} successfully`);
    }
});

app.get("/", ((req, res) => {
    return res.sendFile(__dirname + "/pages/login.html")
}));