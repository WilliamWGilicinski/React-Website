const { config } = require('../config');
const { index } = require('./index');
const path = require('path');

const express = require('express');
const app = express();
const http = require('http').Server(app);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

http.listen(config.httpPort, () => {
    console.log(` [*] listening on *:${config.httpPort}`);
    console.log(app.routes);
})