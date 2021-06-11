const express = require('express');
const cors = require('cors');
const { sendEmail } = require('./sendEmail');


const app = express();
const PORT = 5000;

// Parse JSON from incoming requests
app.use(express.json());

// Parse urlencoded payloads from incoming requests
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
app.use(cors());

app.post('/signup', async (req, res) => {
    const message = `Lesson: ${req.body.lesson},\nFull name: ${req.body.fullName},\nEmail: ${req.body.email}`

    const response = await sendEmail(message);
    console.log("\nEmail has been sent\n");

    return res.sendStatus(200);
});