// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC767338ff11c88793d2fc9912a6700332';
const authToken = '2c1ddf124562da86618d25216810748a';
const client = require('twilio')(accountSid, authToken);

const shreshthNum = '+15024687260';
// const adiNum = '+15027759203';

function message(messageBody) {
    console.log('in message fxn at top')
    client.messages
        .create({
            body: `${messageBody}`,
            from: '+12242580809',
            to: shreshthNum
        })
        .then(message => console.log('msg sent:', message.sid));
}

module.exports = { message };