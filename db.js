const mongoose = require('mongoose');

// Define the mongoDb Connection URL
const mongoURL = 'mongodb://0.0.0.0:27017/hotelnisha' 

// Setup MongoDb Connection
mongoose.connect(mongoURL)

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDb Connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDb Server!');
})

db.on('error', (err) => {
    console.log('MongoDb Connection Error: ', err);
})

db.on('disconnected', () => {
    console.log('MongoDB Disconnected!');
})

// Export the database connection
module.exports = db;


