const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://localhost:27017";


app.use(express.json())

const users = [];

app.get('/users', (req, res) => {
    MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
        if(error) throw new Error(error);

        const user = client.db("mand_users");
        const usersCollec = user.collection("users");
        usersCollec.find({name: "Nicholas"}).toArray((error, foundUsers) => {
            if(error) throw new Error(error);
            client.close();
        });

    });
    res.json(foundUsers)
//    res.json(users)
});

app.post("/users", async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt() 
        //^^ this is gonna be a oneliner on line 18. 
        // instead of using the const salt, we put in the number 10.
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        //console.log(salt);
        console.log(hashedPassword);
        const user = { name: req.body.name, password: hashedPassword }
        users.push(user);
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
});

app.post("/users/login", async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.status(400).send("Cannot find user");
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send("Success");
        } else {
            res.send("Not Allowed");
        }
    } catch {
        res.status(500).send()
    }
});


app.listen(3000);


