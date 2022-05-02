var nodemailer = require('nodemailer');


async function sendMail(to, subject, text){

    var transporter = nodemailer.createTransport({
        service: process.env.mailService,
        auth: {
          user: process.env.userEmail,
          pass: process.env.userPass
        }
    });
    
    var mailOptions = {
      from: process.env.userEmail,
      to: to,
      subject: subject,
      text: text
    };
    
    await transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

}

module.exports = sendMail