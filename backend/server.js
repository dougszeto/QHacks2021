const express = require('express');
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

// TEST POST API
app.post('/', async (req, res) => {
    const dog = {
        activity_level: req.body.activity_level,
        age: req.body.age,
        breed: req.body.breed,
        color: req.body.color,
        good_with_kids: req.body.good_with_kids,
        image: req.body.image,
        name: req.body.name,
        needs_fence: req.body.needs_fence,
        sex: req.body.sex,
        shelter: req.body.shelter
    };
    
    await db.collection('Dogs').doc().set(dog)
        .then(() => {res.json(`${dog.name} added successfully!`)})
        .catch(err => res.status(400).json(err));
})
