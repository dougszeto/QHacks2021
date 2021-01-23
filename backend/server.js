const express = require('express');
require('dotenv').config();

const admin = require('firebase-admin');
const serviceAccount = require('./qhacks2021-b167e-firebase-adminsdk-32qfo-803e52a72a.json');

//initialize admin SDK using serciceAcountKey
admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});

// not sure about this, I'm trying to access the database
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


// TEST GET API
app.get('/:breed', async (req, res) => {
    const breed = req.params.breed;
    const query = db.collection('Dogs').where('breed', '==', breed);
    const querySnapshot = await query.get();
    if(querySnapshot.size > 0) {
        res.json(querySnapshot.docs[0].data());
    } 
    else {
        res.status(400).json('Not found!');
    }
})