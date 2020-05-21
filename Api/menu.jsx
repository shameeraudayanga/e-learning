const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req,res) => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });

  con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

    const sql = "SELECT contents_id AS コンテンツ番号, contents_name AS コンテンツ名, contents_type AS コンテンツ分類, target_user AS 受講対象者 FROM test.m_contents ORDER BY contents_type, contents_name";
    // const sql = "SELECT * FROM test.m_contents=" + req +  "ORDER BY contents_type, contents_name";
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });    
  });
}