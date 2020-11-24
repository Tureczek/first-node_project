const MongodbClient = require("mongodb").MongoClient;


const connectionURL = "mongodb://localhost:27017";

async function findOneUser(req, res, next) {
    await MongodbClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
        if (error) throw new Error(error);
        const userDatabase = client.db("subscribers");
        const userCollection = userDatabase.collection("subscribers");

        const findingUser = userCollection.find({name: req.body.username, password: req.body.password}).toArray((error, foundUser) => {
            if (error) throw new Error(error);
            //console.log(foundUser);
            client.close();
            if (findingUser === null) {
                console.log("it is null ")
                return res.json({message: "You shall not pass!"})
            }
            return res.json(foundUser)

        });
    });
    next()
}




module.exports = findOneUser;
