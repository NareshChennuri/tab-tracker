console.log('Starting app.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined')); // for logging
app.use(bodyParser.json()); // for better parsing
app.use(cors());//any client hit our server from any part of the world, security issue when used

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! Your user was registered! Have fun!`
    })
});

app.listen(process.env.PORT || 8084);