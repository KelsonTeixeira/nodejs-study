const express = require('express');
const fs = require('fs');
var number = -1;

const app = express(); 
app.use(express.static('./public'));

app.get('/teste', (req, res) => {
    number += 1;
    res.json(number);
});


app.listen(3333, (req, res) => (console.log('listening to 3030 port...')));