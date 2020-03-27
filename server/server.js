const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }))


app.post('/post', (req, res) => {
    res.send(res);
})


app.get('/home', (req, res) => {
    res.sendStatus(200);
})



// listen command
app.listen(port, () => {
    console.log('Listening on port', port);
})