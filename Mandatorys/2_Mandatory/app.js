const express = require("express");
const MongodbClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://localhost:27017";
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

app.get('/database', (req, res) => {
    MongodbClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
        if (error) throw new Error(error);
        const userDatabase = client.db("subscribers");
        const userCollection = userDatabase.collection("subscribers");

        userCollection.find({ name: 'Sigma' }).toArray((error, foundUser) => {
            if (error) throw new Error(error);
            client.close();
            res.send({
                data: foundUser
            });
        })
    });
})

app.get("/show", (req, res) => {

})

app.listen(port, (error)=>{
    if (error) {
        console.log(`Server couldn't start, error: ${error}`);
    } else {
        console.log(`Server started on ${port} successfully`);
    }
});
