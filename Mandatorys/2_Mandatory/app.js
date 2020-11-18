const express = require("express");
const app = express();
const fs = require("fs");
const findOneUser = require("./mongoDB/read.js")

const port = process.env.PORT || 80;
const authRouter = require("./route/authenticateRoute.js");
app.use(authRouter);
app.use(express.json()); // next two lines making sure that post works
app.use(express.urlencoded({extended: true})); // this does it possible to use url in upload.js

const loginPage = fs.readFileSync(__dirname + "/pages/login.html").toString();

app.get("/", ((req, res) => {
    // return res.sendFile(__dirname + "/pages/login.html")
    res.send(loginPage);
}));
/*
app.post("/", ((req, res) => {
    console.log(req.body.username)
    findOneUser(req.body.username)
    res.send(loginPage);
}));
*/

app.listen(port, (error)=>{
    if (error) {
        console.log(`Server couldn't start, error: ${error}`);
    } else {
        console.log(`Server started on ${port} successfully`);
    }
});
