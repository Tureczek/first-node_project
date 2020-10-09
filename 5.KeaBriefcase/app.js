const  express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.static("public"));


app.get("/", (req, res) =>{
    return res.sendfile( __dirname + "/public/upload/upload.html");
});


//Konvension at listen ligger nederst
const port = process.env.PORT || 80;
app.listen(8080, (error) =>{
    if (error){
        console.log("Error starting server");
    }
    console.log("server is running on port", Number(port));
});