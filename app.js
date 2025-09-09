const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Welcome to Zomato Node.js App 🚀');
});

app.get('/restaurants', (req, res) => {
    const data = [
        { name: "Spicy Hut", cuisine: "Indian" },
        { name: "Pasta Palace", cuisine: "Italian" },
        { name: "Sushi World", cuisine: "Japanese" }
    ];
    res.json(data);
});

app.listen(port, () => {
    console.log(`Zomato app listening at http://0.0.0.0:${port}`);
});

