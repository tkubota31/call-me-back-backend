const express = require("express")
const axios = require("axios")
const app = require("../app")

const foodApi = "https://api.fda.gov/food/enforcement.json"


app.get("/food", async (req,res,next) => {
    await axios.get(`${foodApi}?search=distribution_pattern:'nationwide'`)
        .then((result) =>{
            console.log(result)
        })
})
