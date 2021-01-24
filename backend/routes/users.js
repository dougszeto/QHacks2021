const router = require('express').Router();
const admin = require('firebase-admin');
const db = admin.firestore();

class User {
  constructor(breed_preference, good_with_kids, age_preference, activity_level, gender, matches) {
    this.breed_preference = breed_preference;
    this.good_with_kids = good_with_kids;
    this.age_preference = age_preference;
    this.activity_level = activity_level;
    this.gender = gender;
    this.matches = matches;
  }
}

var userConverter = {
  toFirestore: function(user) {
    return {
      breed_preference: user.breed_preference,
      good_with_kids: user.good_with_kids,
      age_preference: user.age_preference,
      activity_level: user.activity_level,
      gender: user.gender,
      matches: user.matches,
    };
  },
  fromFirestore: function(snapshot, options) {
    const data = snapshot.data(options);
    return new User(data.breed_preference, data.good_with_kids, data.age_preference, data.activity_level, data.gender, data.matches)
  }
};

// ADD API ENDPOINTS BELOW

router.route('/:user').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data(): {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
});


// MATCHES - - - - - - - - - - - - - - - - - - - -

router.route('/:user/matches').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data().matches: {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
});


// does not work
router.route('/:user/matches').put(async (req, res) => {
  const newMatch = req.body.match;
  const id = req.params.user;

  const query = db.collection('Users').where('id', '==', ''+id).withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.data());
  } 
  else {
    res.status(400).json('Not found!');
  }
});

// BREEDS - - - - - - - - - - - - - - - - - - - -

router.route('/:user/breeds').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data().breed_preference: {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
});


// KIDS - - - - - - - - - - - - - - - - - - - - - -

router.route('/:user/kids').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data().good_with_kids: {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
});


// AGE - - - - - - - - - - - - - - - - - - - - - -

router.route('/:user/age').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data().age_preference: {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
}); 


// ACTIVITY - - - - - - - - - - - - - - - - - - - -

router.route('/:user/activity').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data().activity_level: {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
});


// GENDER - - - - - - - - - - - - - - - - - - - -

router.route('/:user/gender').get(async (req, res) => {
  const id = req.params.user;
  const query = db.collection('Users').withConverter(userConverter);
  const querySnapshot = await query.get();
  if(querySnapshot.size > 0) {
    res.json(querySnapshot.docs.map(doc => doc.id == id? doc.data().gender: {})[0]);
  } 
  else {
    res.status(400).json('Not found!');
  }
});


module.exports = router;