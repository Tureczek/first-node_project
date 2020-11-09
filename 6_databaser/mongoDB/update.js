const MongodbClient = require("mongodb").MongoClient;

const connectionURL = "mongodb://localhost:27017";

MongodbClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) throw new Error(error);

    const memes = client.db("memes");
    const favorits = memes.collection("favorits");

    favorits.updateOne({person: "Obi Wan"}, {$set: {person: "Obi Wan Kenobi"}}, (error, result) => {
        if (error) throw new Error(error);
        console.log(result);
        client.close();
    });
});