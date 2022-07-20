const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const db = require('./db');
const routes = require('./application');
const app = express();
const port = 3000;
env.config();

db.bootstrap();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.use('/', routes.default);
app.use('/book', routes.bookRoutes);

app.listen(port, () => {
    console.log('Server started and running...');
})