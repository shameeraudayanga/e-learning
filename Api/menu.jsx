const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.menu =(req,res) =>{
    const sql = require('SQL/menu.txt');
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        result.json(result);
    });
}