const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const stories = require('./Stories.json');

app.use(cors());

app.get('/data', (req, res) => { 
    return res.json(stories);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
