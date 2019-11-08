const cron = require("node-cron");
const express = require("express");
const nodeMailer = require('nodemailer');
const app = express();
cron.schedule("* * * * * *", function () {
    console.log("Running Cron Job");

    console.log("this is check");
    

    console.log("shakti");

    let transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'rowland.dickens95@ethereal.email', // generated ethereal user
            pass: 'VvtT9pRwXxcke9bwnpp' // generated ethereal password
        }
    });

    const mailOptions = {
        from: '"John Doe" <john.doe@example.com>', // sender address
        to: 'srshaktirai@gmail.com', // list of receivers
        subject: 'Hello there!', // Subject line
        text: 'A Message from Node Cron App', // plain text body
        html: '<b>A Message from Node Cron App</b>' // html body
    };

     transporter.sendMail(mailOptions, function (err, info) {
        
       if (err) {
            console.log(err);
         }
    });
})

app.listen(8000);
