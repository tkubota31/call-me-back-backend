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

router.post('/update', async (req, res) => {
    const { email, typesPreference, phoneNumber } = req.body
    const userRef = db.collection(usersCollection).doc(email);
    const dbRes = await userRef.set({
        typesPref: typesPrefrence
        phoneNumber: phoneNumber,
    }, { merge: true })
    // friends[name] = status
    res.status(200).send(friends)
})

router.delete('/:email', async (req, res) => {
    const userId = req.params.email;
    const dbRes = await db.collection(usersCollection).doc(userId).delete();

    res.status(200).send(userId);
})


module.exports = router;