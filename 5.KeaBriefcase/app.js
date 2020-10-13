const  express = require("express");
const fetch = require("node-fetch");
const app = express();
app.use(express.json()); // Disse to linjer er for at kunne bruge post
app.use(express.urlencoded({extended: true})) // dette er for at kunne bruge url i upload.js

app.use(express.static("public"));


app.get("/", (req, res) =>{
    return res.sendfile( __dirname + "/public/upload/upload.html");
});

app.get("/about", (req, res) =>{
    return res.sendfile( __dirname + "/public/about/about.html");
});

app.get("/download", (req, res) =>{
    return res.sendfile( __dirname + "/public/download/download.html");
});


app.get("/form",(req, res) => {
    console.log(req.query)
    return res.send({data : req.query});
});

app.post("/form", (req, res) =>{
    console.log(req.body);
    return res.send({data : req.body});
});




//Konvension at listen ligger nederst
const port = process.env.PORT || 80;
app.listen(8080, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("server is running on port", Number(port));
});