import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import PlayersDAO from "./dao/playersDAO.js"
import graphDAO from "./dao/graphDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.ATLAS_URI,
    {
        useNewUrlParser: true
    }
).catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await PlayersDAO.injectDB(client)
    await graphDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
})