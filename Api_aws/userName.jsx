// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: '54.250.240.189',
    user: 'root',
    password: '',
    database: 'e_learning',
    port: 3306,
    socket: '../key_elearning.pem'
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql ="select * from e_learning.m_user where user_id = " + req;

    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });
  });
}