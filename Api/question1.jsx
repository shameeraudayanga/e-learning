const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.question1 = () => {
    const sql = require('./Api/question1.txt');
    con.query(sql, (err, result, fields) => {
        if(err) throw err;
        res.json(result);
    });
    
}