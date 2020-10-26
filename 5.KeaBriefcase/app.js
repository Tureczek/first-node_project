const  express = require("express");
const fetch = require("node-fetch");
const app = express();
const fs = require("fs"); //File System
app.use(express.json()); // Disse to linjer er for at kunne bruge post
app.use(express.urlencoded({extended: true})) // dette er for at kunne bruge url i upload.js
app.use(express.static("public"));

// Read the upload page and serve it on /
const uploadPage = fs.readFileSync(__dirname + '/public/upload/upload.html', 'utf-8'); // Here you could replace 'utf-8' with toString();
const footerPage = fs.readFileSync(__dirname + "/public/footer/footer.html",).toString();
//console.log(uploadPage)
console.log(footerPage)

app.get("/", (req, res) => {
    res.send(uploadPage + footerPage);
});

//app.get("/", (req, res) =>{
//    return res.sendfile( __dirname + "/public/upload/upload.html");
//});

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

//import the rout and put it below
const uploadRouter = require("./routes/upload.js");
app.use(uploadRouter);



//Konvension at listen ligger nederst
const port = process.env.PORT || 80;
app.listen(8080, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("server is running on port", Number(port));
});
