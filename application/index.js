const express = require('express');
const bookRoutes = require('./book-routes');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { data: { bookName: 'King Arthur' } });
});

module.exports = {
    default: router,
    bookRoutes
}