const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
    const mysql = require('mysql');

    const con = mysql.createConnection( {
        host: 'localhost',
        user:'root',
        password: ''
    });

    con.connect((err) => {
        if(err) throw (err);
        console.log('Connected!');
    
        const sql = "SELECT C2.contents_name, C1.contents_id, contents_detail_id, contents_statement, choice1, choice2, choice3, choice4, answer FROM e_learning.m_contents_detail AS C1 JOIN e_learning.m_contents AS C2 ON C1.contents_id = C2.contents_id WHERE C1.contents_id = " + req + " ORDER BY contents_detail_id";
        con.query(sql, (err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
    
}