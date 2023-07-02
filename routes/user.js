const express = require("express");
const router = new express.Router();
const { db } = require('../util/firestore/firebase.js');

const usersCollection = 'users';


router.get('/', async (req, res) => {
    const userRef = await db.collection(usersCollection).get()

    // if (!doc) {
    //     return res.sendStatus(400);
    // }
    userRef.forEach(item =>{
        console.log(item.id)
    })
    res.status(200).send()
})

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
