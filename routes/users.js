const express = require("express")
const router = new express.Router()
const axios = require("axios")


router.post('/', async (req,res,next) =>{
   let {email, phone, preference} = req.body
    console.log(req.body)
})

module.exports = router;
