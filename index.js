const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');




// Create express App
const app = express();
const port = 4000;
// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1', require('./Routes/SendingEmail'))

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});