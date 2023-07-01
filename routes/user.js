const express = require("express");
const router = new express.Router();
const { db } = require('../util/firestore/firebase.js');

const usersCollection = 'users';

router.get('/:email', async (req, res) => {
    const userId = req.params.email;
    const userRef = db.collection(usersCollection).doc(userId);
    const doc = await userRef.get()
    if (!doc.exists) {
        return res.sendStatus(400);
    }

    res.status(200).send(doc.data())
})

<<<<<<< HEAD
router.post('/', async (req,res,next) =>{
    let {email, phone, preference} = req.body
     console.log(req.body)
 })

module.exports = router;
=======
router.post('/update', async (req, res) => {
    const { email, typesPref, phoneNumber } = req.body
    if (!email) {
        res.status(400).send('Missing "email" in data.');
    }
    const userRef = db.collection(usersCollection).doc(email);
    let userInfo = {
        typesPref: typesPref,
        phoneNumber: phoneNumber,
    }
    const dbRes = await userRef.set(userInfo, { merge: true });
    res.status(200).send({
        ...userInfo,
        id: email,
    })
})

router.delete('/:email', async (req, res) => {
    const userId = req.params.email;
    const dbRes = await db.collection(usersCollection).doc(userId).delete();

    res.status(200).send(userId);
})


module.exports = router;
>>>>>>> 11a98d39e69d6015a946d850459e7a9befc0bd45
