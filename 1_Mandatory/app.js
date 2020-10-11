const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
const fetch = require("node-fetch");


app.get("/", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/index.html");
});

app.get("/npm", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/npmpage.html");
});

app.get("/javascript", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/javascript.html");
});

app.get("/jquery", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/jquery.html");
});

app.get("/test", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/test.html");
});

//Kig lige lidt ekstra på denne hvis der er tid.
app.get("/proxy", (req, res) => {
    fetch("https://en.wikipedia.org/wiki/Node.js")
        .then(result => result.textConverted())
        .then(body =>{
            return res.send(body);
        });
});



const port = process.env.PORT || 80;
app.listen(80, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("server is running on port", Number(port));
});