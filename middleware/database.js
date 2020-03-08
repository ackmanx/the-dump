import { MongoClient } from 'mongodb'
import nextConnect from 'next-connect'

const clusterName = 'hobby-cluster'
const databaseName = 'the-dump'
const connectionUrl = `mongodb+srv://admin:F8cHHZjWza0SRGOx@${clusterName}-f6tmy.mongodb.net/test?retryWrites=true&w=majority`

const client = new MongoClient(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

async function database(req, res, next) {
    if (!client.isConnected()) await client.connect()

    req.dbClient = client
    req.db = client.db(databaseName)

    return next()
}

const middleware = nextConnect()

middleware.use(database)

export default middleware
