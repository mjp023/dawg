const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();

app.use(cors());

app.get('/proxy', async (req, res) => {
    const uid = req.query.uid;
    try {
        const response = await fetch(`https://www.facebook.com/profile.php?id=${uid}&sk=about_contact_and_basic_info`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.37',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
                'Accept-Language': 'en-US,en;q=0.8',
                'Connection': 'keep-alive'
            }
        });
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});