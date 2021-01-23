const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore();


// ADD API ENDPOINTS BELOW

router.route('/').get(async (req, res) => {


  const query = db.collection('Shelters');
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    shelters = querySnapshot.docs.map(doc => doc.data());
    res.json(shelters);
  } 
  else {
    res.status(400).json('Not found!');
  }
})



module.exports = router;