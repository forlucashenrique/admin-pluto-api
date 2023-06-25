const express = require('express');
const router = require('./routers');
const app = express();
require('./config/db');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use('/api/v1', router);

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
} );