const mongoose = require('mongoose');

const dbURL = "mongodb+srv://Lakshay:12345@college-daze.uzgdv.mongodb.net/collegeDaze?retryWrites=true&w=majority"

const connectToMongo = async () => {
    mongoose.connect(dbURL).then(()=>{
        console.log("Connection Successful");
    }).catch((err)=> console.log('No Connection'))
}

module.exports = connectToMongo