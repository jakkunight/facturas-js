const express = require('express');
const path = require('path');
const db = require('./database/db');

const app = express();

app.set('port', 3000);
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log("[APP -> listen()] SERVER ON PORT", app.get('port'));
});

module.exports = app;