const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


exports.question2 = (req,res) => {
    const mysql = require('mysql');

    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    

        const sql = "select C1.contents_id, contents_detail_id, C2.contents_name, contents_statement, choice1, choice2, choice3, choice4, answer from test.m_contents_detail as C1 join test.m_contents as C2 on C1.contents_id = C2.contents_id where C1.contents_id = 2 order by contents_detail_id";
        con.query(sql,(err, result, fields) => {
        if (err) throw err;
        res.json(result);
        });
    });
}