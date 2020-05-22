const express = require('express');
const app = express();
const M_001 = require('./M_001');
const S_001 = require('./S_001');
const S_002 = require('./S_002');
const S_003 = require('./S_003');

app.get('/M_001', (req, res) => {
    M_001.M_001(req, res);
});

app.get('/S_001', (req, res) => {
    S_001.S_001(req, res);
});

app.get('/S_002', (req, res) => {
    S_002.S_002(req, res);
});

app.get('/S_003', (req, res) => {
    S_003.S_003(req, res);
});

app.listen(4000);
Console.log('sever listen ...');