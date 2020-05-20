// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getdata = (req, res) => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql ="Select contents_name,contents_type from e_learning.m_contents where contents_type = 1";

    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}