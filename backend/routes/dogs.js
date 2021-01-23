const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// GET ALL DOGS
router.route('/').get(async (req, res) => {
    const data = [];
    db.collection('Dogs').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        });
        res.json(data);
    });
});

// GET ALL DOGS OF GIVEN BREED
router.route('/breeds/:breed').get(async (req, res) => {
    const breed = req.params.breed;
    const query = db.collection('Dogs').where('breed', '==', breed);
    const querySnapshot = await query.get();
    const data = [];
    if(querySnapshot.size > 0) {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        })
        res.json(data);
    } 
    else {
        res.status(400).json(`Could not find any ${breed}s`);
    }
});

// GET ALL DOGS YOUNGER THAN MAX AGE
router.route('/max-age/:age').get(async (req, res) => {
    const data = [];
    const age = Number(req.params.age);
    const query = db.collection('Dogs').where('age', '<=', age);
    const querySnapshot = await query.get()
    if(querySnapshot.size > 0) {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        });
        res.json(data);
    } 
    else {
        res.status(400).json(`Could not find any dogs younger than ${age}`);
    }
});

// GET ALL DOGS OLDER THAN MIN AGE
router.route('/min-age/:age').get(async (req, res) => {
    const age = Number(req.params.age);
    const query = db.collection('Dogs').where('age', '>=', age);
    const querySnapshot = await query.get();
    const data = [];
    if(querySnapshot.size > 0) {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        })
        res.json(data);
    } 
    else {
        res.status(400).json(`Could not find any dogs older than ${age}`);
    }
});

// GET ALL DOGS THAT ARE GOOD WITH KIDS
router.route('/kids').get(async (req, res) => {
    const query = db.collection('Dogs').where('good_with_kids', '==', true);
    const querySnapshot = await query.get();
    const data = [];
    if(querySnapshot.size > 0) {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        })
        res.json(data);
    } 
    else {
        res.status(400).json(`Could not find any dogs that are good with kids`);
    }
});

// POST NEW DOG
router.route('/').post(async (req, res) => {
    const dog = {
        activity_level: req.body.activity_level,
        age: req.body.age,
        breed: req.body.breed,
        good_with_kids: req.body.good_with_kids,
        image: req.body.image,
        name: req.body.name,
        sex: req.body.sex,
        shelter: req.body.shelter
    };
    
    await db.collection('Dogs').doc().set(dog)
        .then(() => {res.json(`${dog.name} added successfully!`)})
        .catch(err => res.status(400).json(err));
})
module.exports = router;