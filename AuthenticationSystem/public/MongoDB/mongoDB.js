const MongoClient = require("mongodb").MongoClient

const connectionURL =  "mongodb://localhost:27017"

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) throw new Error(error);
    console.log("Connected to Database")
    const database = client.db('mandatory2')
    const userCollection = database.collection('users')
})

