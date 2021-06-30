require('dotenv').config();
const { SEND_GRID_API_KEY } = process.env;


const sendGridMail = require('@sendgrid/mail')
sendGridMail.setApiKey(SEND_GRID_API_KEY);

const sendEmail = async (message) => {
    const emailMsg = {
        to: 'adigollamudi@gmail.com', // Change to your recipient
        from: 'aditya@path2programming.com', // Change to your verified sender
        subject: 'New P2P lesson signup',
        text: message,
    }

    try {
        const response = await sendGridMail
            .send(emailMsg)
        console.log(`Email sent: ${JSON.stringify(emailMsg)}`)
    } catch (err) {
        console.error(err.toString());
    }
}


module.exports = { sendEmail };