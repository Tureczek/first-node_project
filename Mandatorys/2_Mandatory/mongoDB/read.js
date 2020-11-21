const MongodbClient = require("mongodb").MongoClient;
const Subscriber = require("./subscribers");

const connectionURL = "mongodb://localhost:27017";

async function findOneUser(userName) {
    try {
        await MongodbClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
            if (error) throw new Error(error);
            const userDatabase = client.db("subscribers");
            const userCollection = userDatabase.collection("subscribers");

            userCollection.find({name: userName}).toArray((error, foundUser) => {
                if (error) throw new Error(error);
                console.log(foundUser);
                client.close();
            });
        });
    } catch (error) {
        if (error) throw new Error(error);
    }
}




module.exports = findOneUser;
