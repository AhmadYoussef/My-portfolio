var api_key = 'pubkey-688aa4957716d15cd3afc115a2815892';
var domain = 'sandbox509b386ca5f04443b620c576601a1cfe.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

var data = {
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'serobnic@mail.ru',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, function (error, body) {
    if (error) throw error;
    console.log(body);
});