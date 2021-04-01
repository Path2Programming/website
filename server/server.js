const express = require('express');
const cors = require('cors');
const { message } = require('./message');

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Parse JSON from incoming requests
app.use(express.json());

// Parse urlencoded payloads from incoming requests
app.use(express.urlencoded({ extended: true }));

// Start the server and have it listen on the specified port
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));


app.post('/', (req, res) => {
    console.log("NEW SIGNUP!");
    message(req.body.email);
    return res.sendStatus(200);
})

// Error-handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal server error');
});

// Catch-all route handler for any unhandled requests
app.use('*', (req, res) => {
    console.error('Unhandled route');
    res.sendStatus(404);
});