const mongoose = require('mongoose');

module.exports.bootstrap = () => {
    const connectionString = process.env.MONGO_URI;
    console.log(connectionString);
};