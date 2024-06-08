const mongoose = require('mongoose');


async function connectToDB(){
    try {
        await mongoose.connect('mongodb://localhost:27017/Hackathon');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}


module.exports = {connectToDB};