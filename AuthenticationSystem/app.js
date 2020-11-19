const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const connectionURL =  "mongodb://localhost:27017"

app.use(express.json())
app.use(express.urlencoded({extended: true}))


const port = process.env.PORT || 80

app.listen(port, (error) => {
    if (error) {
        console.log(`Server couldn't start, error: ${error}`)
    } else {
        console.log(`Server started on port: ${port} successfully`)
    }
})


MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) throw new Error(error);
    console.log("Connected to Database")
    const database = client.db('mandatory2')
    const userCollection = database.collection('users')

    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/public/index/index.html")
    })

    app.post("/create", (req, res) => {
        console.log(req.body)
        userCollection.insertOne( req.body )
    })
})

