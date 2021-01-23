const express = require('express');
const cors = require('cors');
require('dotenv').config();

const admin = require('firebase-admin');
const serviceAccount = require('./qhacks2021-b167e-firebase-adminsdk-32qfo-803e52a72a.json');

//initialize admin SDK using serciceAcountKey
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8080;

const dogsRouter = require('./routes/dogs');
const sheltersRouter = require('./routes/shelters');
const usersRouter = require('./routes/users');

app.use('/dogs', dogsRouter);           // dog endpoints have /dogs/endpoint
app.use('/shelters', sheltersRouter);   // shelter endpoints have /shelters/endpoint
app.use('/users', usersRouter);         // user endpoints have /users/endpoint

app.listen(port, () => {
    console.log(`Goodboy API is running on port ${port}`);
})

app.get('/', async (req, res) => {
    res.json('Goodboy API ready to roll!');
})


// SHELTER ENDPOINTS
app.get('/shelters', async (req, res) => {
    const query = db.collection('Dogs');
    const querySnapshot = await query.get();
    if(querySnapshot.size > 0) {
        res.json(querySnapshot.docs[0].data());
    } 
    else {
        res.status(400).json('Not found!');
    }
})
