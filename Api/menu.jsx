const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.menu_screen = (req,res) => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql = "select * from test.m_contents order by contents_type, contents_name";
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}