const mongoose = require("mongoose");
const schema = mongoose.Schema;

const registerSchema = new schema({
    Name : String,
    Email : String,
    Password : String,
    CPassword : String,
    Phone : Number,
    Type : String,
    Class : String,
    City :String
});

const Register = mongoose.model('register',registerSchema);

module.exports = Register;