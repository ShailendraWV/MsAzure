let mongoose = require('mongoose');
const configuration = require('../environment')

const MONGO_URI = configuration.MONGO_URI;

mongoose.connect(MONGO_URI, {
    auth: {
        user: process.env.COSMOSDB_USER,
        password: process.env.COSMOSDB_PASSWORD
    },
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false
}).then(r => console.log("MongoDB connected")).catch(err => {
        console.log("Error connecting MongoDB");
        console.log(err);
    }
)
exports.DEFAULT_CONN = mongoose.connection;