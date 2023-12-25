const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

const categories=require('./data/categories.json')

app.get('/', (req, res) => {
    res.send("Dragon News Is Running");
})


app.get('/categories', (req, res) => {
    res.send(categories);
})

app.listen(port, () => {
    console.log('Dragon News Is Runing on port', port)
    console.log(categories)
})