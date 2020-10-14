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
    return res.sendfile(__dirname + "/public/upload/npm/npmpage.html");
});

app.get("/javascript", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/javascript/javascript.html");
});

app.get("/jquery", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/jquery/jquery.html");
});

app.get("/restful", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/restful/restful.html");
});

app.get("/ajax", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/ajax/ajax.html");
});

app.get("/test", (req, res) => {
    return res.sendfile(__dirname + "/public/upload/test.html");
});

/*
http://sahatyalkabov.com/jsrecipes/#!/backend/parsing-query-string-post-and-url-parameters
GET & POST
Query string example
*/
app.get("/rest", (req, res) => {
    res.send("Your query: " + req.query.q + "\n");
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