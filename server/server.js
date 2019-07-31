const express = require('express');
//set port to 5000
const PORT = 5000;
let hello = require('./modules/hello.js')


// create your express app
let app = express();
//point app towards static file server
app.use(express.static('server/public'));


//listen for connections on port 5000
app.listen(PORT, () => {
    console.log('app is running on port: ', PORT);
})


app.get('/hello', (req, res) => {
    res.send(hello);
})