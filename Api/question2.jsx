const express = require('express');
const app = express();
const bodyParser = require('bodyParser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

exports.question2 = (req,res) => {
    const sql = require('SQL/question2.txt');
    con.query(sql,(err, result, fields) => {
        if (err) throw err;
        res.json(result);
    });

}