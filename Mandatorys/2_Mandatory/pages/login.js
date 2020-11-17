const MongoClient = require("mongodb").MongoClient;

const connectionURL = "mongodb://localhost:27017";


function findUsers(username){
    MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
        if (error) throw new Error(error);

        const subscriberDatabase = client.db("subscribers");
        const subscriberCollection = subscriberDatabase.collection("subscribers");

        subscriberCollection.find({ name: username }).toArray((error, foundUser) => {
            if (error) throw new Error(error);
            console.log(foundUser);
            client.close();
        })
    });

}



