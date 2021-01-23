const express = require('express');
const Firestore = require('@google-cloud/firestore');

const db = new Firestore();
const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Goodboy API is running on port ${port}`);
})

app.get('/', async (req, res) => {
    res.json('Goodboy API ready to roll!');
})