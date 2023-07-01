const express = require('express');
const app = express();
const cors = require("cors");

const foodRoutes = require('./routes/food');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    console.log('root')
    res.send('Hello World!')
})


const smsClient = require('./util/sms');
app.get('/send/sms/', (req, res) => {
    const phoneNum = req.query.phoneNum;
    const messageBody = req.query.message;
    console.log(`sending SMS to num: ${phoneNum}, message: ${messageBody}`);

    smsClient.sendText(phoneNum, messageBody)
        .then(smsResponse => console.log(smsResponse.body))
});


app.use('/food', foodRoutes);


app.listen(5000,() => {
  console.log('App on port 5000');
})
