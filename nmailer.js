const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                            user: 'godwinl200@gmail.com',
                            pass: '08108017189'
                        }
                    });
                    const mailOptions = {
                        from: 'godwinl200@gmail.com', // sender address
                        to: 'godwinl200@gmail.com', // list of receivers
                        subject: 'TESTING NODEMAILER', // Subject line
                        text: 'Your html here'// plain text body
                        };
                    transporter.sendMail(mailOptions, function (err, info) {
                        if(err)
                            console.log(err)
                        else
                            console.log(info);
                        }); 