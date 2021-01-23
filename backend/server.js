const express = require('express');
require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = require('./qhacks2021-b167e-firebase-adminsdk-32qfo-803e52a72a.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();
const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Goodboy API is running on port ${port}`);
})

app.get('/', async (req, res) => {
    res.json('Goodboy API ready to roll!');
})