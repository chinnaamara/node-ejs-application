const express = require('express');
const bookRoutes = require('./book-routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server running!');
});

module.exports = {
    default: router,
    bookRoutes
}