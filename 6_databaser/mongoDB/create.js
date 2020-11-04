const MongodbClient = require("mongodb").MongoClient;

const connectionURL = "mongodb://localhost:27017";

MongodbClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) throw new Error(error);

    const memes = client.db("memes");

    const favorits = memes.collection("favorits");

    console.log(favorits);

    favorits.insertOne({template: "Hello There", person: "Obi Wan"}, (error, result) => {
        if (error) throw Error(error);
        console.log(result);

        //Skal lukke db her, ellers kan der opstå fejl
        client.close();
    });
    
});