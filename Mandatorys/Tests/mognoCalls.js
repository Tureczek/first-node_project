const MongoClient = require("mongodb").MongoClient;
const connectionURL = "mongodb://localhost:27017";


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