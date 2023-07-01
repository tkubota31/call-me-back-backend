const express = require('express');
const ExpressError = require("./expressError")
const app = express();
const {authenticateJWT} = require("./middleware/auth")
const cors = require("cors")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authenticateJWT)


module.exports = app
