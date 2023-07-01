
require('./config/db');
require('./config/dotenv');
const express = require('express');
const router = require('./routers');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}.`);
} );