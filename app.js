const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const CONTACTS = [
    {id: 1, name: 'Svitlana', value: 'developer', marked: false}
]

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});