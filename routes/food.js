const express = require("express");
const router = new express.Router();
const axios = require("axios")

const foodApi = "https://api.fda.gov/food/enforcement.json"


router.get("/", async (req,res,next) => {
    await axios.get(`${foodApi}?search=distribution_pattern:'nationwide'`)
        .then((result) =>{
            console.log(result)
            res.send(result.data);
        })
})

module.exports = router;