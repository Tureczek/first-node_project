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


async function getSubscriber(req, res, next) {
    let subscriber;
    let password;
    try {
        subscriber = await Subscriber.find({name: req.body.username})
        //subscriber = await Subscriber.find( subscriber => subscriber.name === req.body.name)
        if (subscriber == null) {
            console.log("it is null ")
            return res.status(400).json({message: "Cannot find subscriber"})
        }
    } catch (err) {
        return res.status(500).json({message: err.message})
    }
    console.log("Found something")
    console.log(subscriber)
    res.subscriber = subscriber
    next()
}

// module.exports = authenticate;

module.exports = getSubscriber;
module.exports = findOneUser;
