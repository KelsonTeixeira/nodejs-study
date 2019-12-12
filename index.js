const express = require('express');

const app = express(); 



app.use(express.static('./public'));

app.get('/file', (req, res) => {
    res.sendFile('./bike.png'); 
})





app.listen(8080, (req, res) => (console.log('listening to 3030 port...')));