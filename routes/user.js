const express = require("express");
const router = new express.Router();
const { db } = require('../util/firestore/firebase.js');


router.get('/:id', async (req, res) => {
    const userId = req.params.id;
    const userRef = db.collection('users').doc(userId);
    const doc = await userRef.get()
    if (!doc.exists) {
        return res.sendStatus(400);
    }

    res.status(200).send(doc.data())
})

module.exports = router;