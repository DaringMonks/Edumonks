const mongoose = require("mongoose");
const schema = mongoose.Schema;

const querySchema = new schema({
    Name : String,
    Type: String,
    Email : String,
    Contact : Number,
    Query : String
    });

const Query = mongoose.model('query',querySchema);

module.exports = Query;