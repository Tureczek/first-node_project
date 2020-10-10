const express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));



app.get("/", (req, res) => {
    console.log(__dirname);
    return res.sendFile(__dirname + "/public/upload/index.html");
});







app.listen(8080, (error)=>{
    if (error){
        console.log("Error starting server");
    }
    console.log("Server started successfully on port", 8080);
});