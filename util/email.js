const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth :{
        type: "0Auth2",
        user: "callmebackyall@gmail.com",
        pass: "hijmvrwmybgsctcp"
    }
});

const mailOptions = {
    from : "callmebackyall@gmail.com",
    to:"keiwa_hime@hotmail.com",
    subject: "Nodemailer Test",
    text: "Chunch gave me your email so I am using for testing purposes. Nice email LOL."
};

transporter.sendMail(mailOptions, function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log("Email sent")
    }
});
