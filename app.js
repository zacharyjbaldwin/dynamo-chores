const chalk = require('chalk');
const express = require('express');
const ip = require('ip');
const hbs = require('hbs');

const ipAddress = ip.address();
const {Logger} = require('./modules/util');
const log = new Logger();
const port = process.env.PORT || 3000;

var app = express();
hbs.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res) => {
    res.end('Hello world!');
});

app.listen(3000, () => {
    log.info(`Dynamo-Chores server listening on ${ipAddress}:${port}!`);
    log.info('Navigate to this address on another device on the same network to use this product.');
});