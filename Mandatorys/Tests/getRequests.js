const express = require("express");
const app = express();
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://localhost:27017";
const dataBase = require("mongodb");
let db;

app.use(express.json());

// Initialize connection once
MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (function (err, database){
    if(err) throw new Error(err);
    db = database;
}));

// Reuse database
router.get("/", (req, res, next) => {
    const mandatory2 = client.db("mandatory2");
    const users = mandatory2.collection("users").find({}, (err, docs) => {
        if(err) return  next(err);
         docs.each(function (err, doc){
             if(doc){
                 console.log(doc);
             } else {
                 res.send();
             }
         });
    }).limit(10, function (e,d){});
});

app.use("/", router);

app.listen(3000);
console.log("Listen on PORT 3000");