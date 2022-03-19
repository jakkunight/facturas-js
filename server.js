const express = require('express');
const fileupload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const products = require('./routes/api/products');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.resolve(__dirname, 'public')));
/* app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
})); */
app.use(fileupload());
app.use(express.urlencoded({
    extended: true
}));

app.use(async (req, res, next) => {
    console.log(`[${req.method.toUpperCase()}] ${req.protocol}://${req.hostname}:${app.get('port')}${req.url}`);
    console.log(`[CLIENT METADATA]`);
    console.log(`[IP] ${req.ip}`);
    /* console.log(`[USER] ${req.user}`);
    console.log(`[FILES] ${req.files}`);
    console.log(`[BODY] ${req.body}`);
    console.log(`[PARAMS] ${req.params}`);
    console.log(`[COOKIES] ${req.cookies}`); */
    next();
});

app.use(products);

app.listen(app.get('port'), () => {
    console.log("[APP -> listen()] SERVER ON PORT", app.get('port'));
});

module.exports = app;