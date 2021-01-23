const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// ADD API ENDPOINTS BELOW
router.route('/').get(async (req, res) => {
    const data = [];
    db.collection('Dogs').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            data.push(doc.data());
        });
        res.json(data);
    });
});

router.route('/:breed').get(async (req, res) => {
    const breed = req.params.breed;
    const query = db.collection('Dogs').where('breed', '==', breed);
    const querySnapshot = await query.get();
    if(querySnapshot.size > 0) {
        res.json(querySnapshot.docs[0].data());
    } 
    else {
        res.status(400).json('Not found!');
    }
});

module.exports = router;