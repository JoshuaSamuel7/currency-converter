const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const fetch = require('node-fetch'); // Import fetch

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Add this to handle JSON data
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.post("/input", function (req, res) {
    const { fromdenom, todenom, amt } = req.body;
    const url = `https://api.frankfurter.app/latest?from=${fromdenom}&amount=${amt}&to=${todenom}`;

    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            res.send(json);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            res.status(500).send({ error: 'Failed to fetch data' });
        });
});


app.listen(8000, function () {
    console.log("Server is live on port 8000");
});
