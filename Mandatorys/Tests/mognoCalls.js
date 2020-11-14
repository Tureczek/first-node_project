const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://localhost:27017";

const app = express();
app.use(express.json());

function findAll() {
    MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
        if (error) throw new Error(error);

        const mandatory2 = client.db("mandatory2");
        const users = mandatory2.collection("users");

        users.find({}).toArray((error, foundUsers) => {
            if (error) throw new Error(error);
            console.log(foundUsers);
            client.close();
        });
    });
}


function findOne(text){
    MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
        if(error) throw new Error(error);

        const mandatory2 = client.db("mandatory2");
        const users = mandatory2.collection("users");

        users.find({name: text}).toArray((error, result) => {
            if(error) throw new Error(error);
            console.log(result);
            client.close();
        });
    });
}




findOne("Nicholas");
findAll();

app.post("/users1", async (req, res) => {
    const mandatory2 = client.db("mandatory2");
    const users = mandatory2.collection("users");
    const user = users.find(user => user.name = req.body.name);
    if(user == null) {
        return res.status(400).send("Can not find user");
    }
    try{
       res.status(200).send(user);
   } catch {
       res.status(500).send();
   }
});








app.listen(3000);
