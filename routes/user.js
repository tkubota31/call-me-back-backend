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

router.post('/', async (req,res,next) =>{
    let {email, phone, preference} = req.body
     console.log(req.body)
 })

module.exports = router;
