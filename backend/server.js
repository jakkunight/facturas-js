const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT | 3000);
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(async (req, res, next) => {
    await console.log(`[${req.method.toUpperCase()}] ${req.protocol}://${req.hostname}:${app.get('port')}${req.url}`);
    await console.log(`[CLIENT METADATA]`);
    await console.log(`[IP] ${req.ip}`);
    await console.log(`[USER] ${req.user}`);
    await console.log(`[FILES] ${req.files}`);
    await console.log(`[BODY] ${req.body}`);
    await console.log(`[PARAMS] ${req.params}`);
    await console.log(`[COOKIES] ${req.cookies}`);
    next();
});

app.listen(app.get('port'), () => {
    console.log("[APP -> listen()] SERVER ON PORT", app.get('port'));
});

module.exports = app;