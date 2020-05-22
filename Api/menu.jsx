<<<<<<< HEAD
<<<<<<< HEAD
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

    const sql = "SELECT contents_id, contents_name, contents_type, target_user FROM e_learning.m_contents WHERE target_user= " + req + " ORDER BY contents_type, contents_name";
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });    
  });
=======
=======
>>>>>>> 43a133f1669985a88d9c4cccca62df7dbdac694c
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

    const sql = "SELECT contents_id, contents_name, contents_type, target_user FROM e_learning.m_contents WHERE target_user= " + req + " ORDER BY contents_type, contents_name";
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    });    
  });
<<<<<<< HEAD
>>>>>>> 43a133f... master merged
=======
>>>>>>> 43a133f1669985a88d9c4cccca62df7dbdac694c
}