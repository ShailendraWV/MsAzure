// development environment
require('dotenv').config()
exports.MONGO_URI = "mongodb://" + process.env.COSMOSDB_HOST + ":" + process.env.COSMOSDB_PORT + "/" + process.env.COSMOSDB_DBNAME + "?ssl=true&replicaSet=globaldb";
exports.PORT = process.env.PORT
