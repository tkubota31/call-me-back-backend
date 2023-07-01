const express = require('express');
const app = express();
const axios = require("axios")


const foodApi = "https://api.fda.gov/food/enforcement.json"


app.get("/food", async (req,res,next) => {
    await axios.get(`${foodApi}?search=distribution_pattern:'nationwide'`)
        .then((result) =>{
            console.log(result)
        })
})


app.listen(5000,() => {
  console.log('App on port 5000');
})
