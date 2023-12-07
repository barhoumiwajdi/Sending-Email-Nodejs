const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const multer = require("multer")
// Create express App
const app = express();
const port = 4000;
//Define where project photos will be stored
var storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, 'public/uploads');
    },
    filename: function (request, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

// Function to upload project images
var upload = multer({ storage: storage }).any('uploadedImages');

// add new photos to the DB
app.post('/projects', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(req.files);
        res.end('Your files uploaded.');
        console.log('Yep yep!');
    });
});


// Common Configurations
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1', require('./Routes/SendingEmail'))

app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});