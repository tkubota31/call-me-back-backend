const express = require("express");
const router = new express.Router();
const axios = require("axios")

const foodApi = "https://api.fda.gov/food/enforcement.json"


router.get("/", async (req,res,next) => {
    await axios.get(`${foodApi}?sort=recall_initiation_date:desc&limit=1`)
        .then((result) =>{
            console.log(result.data.results)
            res.send(result.data.results);
        })
})

module.exports = router;
