const express = require('express');
const cors = require('cors');

// const 

const app = express();

const PORT = 5000;

// Parse JSON from incoming requests
app.use(express.json());

// Parse urlencoded payloads from incoming requests
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
app.use(cors());

// app.use('/', router);