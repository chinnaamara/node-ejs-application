const express = require('express');
const routes = require('./application');
const app = express();
const port = 3000;

// const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('Server running!');
// });

app.use('/', routes.default);
app.use('/book', routes.bookRoutes);

app.listen(port, () => {
    console.log('Server started and running...');
})