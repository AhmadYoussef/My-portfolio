const express = require('express');
// const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const api_key = 'b911e64d04b90f010db4bfdc1f87ff03-2b0eef4c-443f1981';
const domain = 'http://sandbox6ff5e1c2399b46d5a9857a74cc1329f4.mailgun.org';
const mailGun = require('mailgun-js')({ apiKey: api_key, domain: domain });



app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json());
app.post('/sendMail', function (req, res) {
    const body = req.body.obj;
    const data = {
        from: body.email,
        to: 'Ahmad.k.youssef@gmail.com',
        subject: 'Email From My Protfolio',
        text: `
        ${body.firstName} ${body.lastName}
        Telephone Number: ${body.telephone},
        Email Address: ${body.email},
        Message :
        ${body.message}`
    };

    mailGun.messages().send(data, function (error, body) {
        console.log(error, body);

        if (error) {
            return res.send({ sent: false, message: 'Not Send' });
        };
        return res.send({ sent: true, message: 'Send' });
    });

});

const host = '0.0.0.0';
const port = process.env.PORT || 5000;

app.listen(port, host, () => console.log(`Server started on ${port}`));
