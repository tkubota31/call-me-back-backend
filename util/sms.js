require('dotenv').config();


const accountSid = "AC666ad1c27740b127dd0d8754820bf6bb";
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = "+18559979381"

const cron = require("node-cron")
const client = require('twilio')(accountSid, authToken)


const scheduledText = cron.schedule('0 0 1 * *', () =>{
    const sendText = async (toPhoneNum, message) => {
        const response = client.messages.create({
            body: message,
            from: twilioNumber,
            to: toPhoneNum
        })

        return response;
    };

})


exports.scheduledText = scheduledText
