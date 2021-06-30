const { sendEmail } = require('./sendEmail');
const express = require('express');
const router = express.Router();


router.post('/', async (req, res) => {
    const message = `Lesson: ${req.body.lesson},\nFull name: ${req.body.name},\nEmail: ${req.body.email}`

    await sendEmail(message);
    // console.log("\nEmail has been sent\n");

    return res.sendStatus(200);
});

module.exports = router;