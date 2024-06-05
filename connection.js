const { MongoClient } = require("mongodb");
require('dot-env').config();


async function main(callback) {
    const URI = process.env.MONGO_URI;
    const client = new MongoClient(URI, {useNewUrlParser: true, useUnifiedTopology: true})

    try {
        await client.connect();
    }
    catch(err){
        console.erroe(err)
        throw new Error('Unable to connect to database')
    }

}

module.exports = main