const MongodbClient = require("mongodb").MongoClient;

const connectionURL = "mongodb://localhost:27017";

MongodbClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) throw new Error(error);

    const memes = client.db("memes");

    const favorits = memes.collection("favorits");

    favorits.find({person: "Obi Wan"}).toArray((error, foundFavorits) => {
        if (error) throw new Error(error);;
        console.log(foundFavorits);
        client.close();
    });

});