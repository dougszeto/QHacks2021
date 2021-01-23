const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore();

// ADD API ENDPOINTS BELOW

router.route('/:user').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users');
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    user = querySnapshot.docs.map(doc => doc.id == id? doc.data(): {});
    res.json(user);
  } 
  else {
    res.status(400).json('Not found!');
  }
});




module.exports = router;