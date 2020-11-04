const  express = require("express");
//const fetch = require("node-fetch");
const app = express();
const fs = require("fs"); //File System
app.use(express.json()); // The next two lines is to make sure that post works
app.use(express.urlencoded({extended: true})) // This is so that we can use url in upload.js
app.use(express.static("public"));


const footer = fs.readFileSync(__dirname + "/public/footer/footer.html").toString();
const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();

// Read the upload page and serve it on / -> This is SSR
const uploadPage = fs.readFileSync(__dirname + "/public/upload/upload.html", "utf-8"); // Here you could replace 'utf-8' with toString();
const aboutPage = fs.readFileSync(__dirname + "/public/about/about.html").toString();
const downloadPage = fs.readFileSync(__dirname + "/public/download/download.html").toString();


app.get("/", (req, res) => {
    res.send(header + uploadPage + footer);
});

/*
app.get("/", (req, res) =>{
    return res.sendfile( __dirname + "/public/upload/upload.html");
});

app.get("/about", (req, res) =>{
    return res.sendfile( __dirname + "/public/about/about.html");
});
*/

app.get("/about", (req, res) => {
   res.send(header + aboutPage + footer);
});


/*
app.get("/download", (req, res) =>{
    return res.sendfile( _  _dirname + "/public/download/download.html");
});
*/
app.get("/download/:id", (req, res) =>{
   res.send(header + downloadPage + footer);
});

/*
app.get("/uploads",(req, res) => {
    console.log(req.query)
    return res.send({data : req.query});
});
*/

const uploadRouter = require("./routes/upload.js"); //import the rout and put it below -> makes it possible to assemble pages. ex. header + footer
app.use(uploadRouter);

const port = process.env.PORT || 80;
app.listen(8080, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("server is running on port", Number(port));
});
