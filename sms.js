const accountSid = "AC666ad1c27740b127dd0d8754820bf6bb";
const authToken = "cc527e6bda5eda705a7bb535cd48b51b";
const twilioNumber= "+18559979381"

const client = require('twilio')(accountSid,authToken)

client.messages.create({
        body:"test text message",
        from: twilioNumber,
        to:"+15087696515"
    })
    .then(message => console.log(message.body))



// Pull list from database and call it numbersToMessage

// numbersToMessage.forEach((number) =>{
//     let message = client.messages.create({
//         body:"test test",
//         from: twilioNumber,
//         to: number
//     })
//     .then(message => console.log(message.body))
// })
