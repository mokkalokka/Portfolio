const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();


exports.redirectMail = functions.firestore.document('/messages/{id}')
    .onCreate((snapshot, context) => {
        // getting dest email by query string
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: functions.config().gmail.user,
                pass: functions.config().gmail.key
            }
        });

        const mailOptions = {
            from: 'MokkaLokka-Tech <michael.larsen90@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: "michael.larsen90@gmail.com",
            subject: 'New message from MokkaLokka-Tech Portfolio: ', // email subject
            html:
                '<p><b>Subject:</b> <br>' + snapshot.data().subject + '</p>' +
                '<p><b>Message:</b>  <br> ' + snapshot.data().message + '</p>' + '<br>' +
                '<p><b>Name:</b> <br> ' + snapshot.data().name + '</p>' +
                '<p><b>Email:</b> <br> ' + snapshot.data().email + '</p>' +
                '<p><b>Phone number:</b> <br> ' + snapshot.data().phoneNr + '</p>'

        };

        // Sending mail
        transporter.sendMail(mailOptions);
    });

