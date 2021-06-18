//This is needed to help me encrypt my api key when I push my code to git
const dotenv = require("dotenv");
dotenv.config();

const path = require('path')
const express = require('express');
const https = require('https');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
const meaningCloud = require('meaning-cloud');

// Start up an instance of app
const app = express();

const api_key = process.env.API_KEY;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


// Setup Server
const port = 8081;

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

// Initialize all route with a callback function
// Callback function to complete GET '/all'
app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
});

app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});


app.post('/text', async(req, res) => {
    console.log('req.body ===+>', req.body)
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&txt=${req.body.formText}&lang=en`);
    try {
        const data = await response.json();
        console.log(data);
        res.send(data);
    } catch (error) {
        console.log("error", error);
    }
});