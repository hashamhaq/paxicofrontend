const express = require('express');
const app = express();
const port = 5002;

app.get('/', (req, res) => res.send('Frontend 1st change through GIT and container jenkins 5002 version 1.0'));

app.listen(port, () => console.log(`App 1 listening on port ${port}`));
