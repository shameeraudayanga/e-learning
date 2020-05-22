const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


exports.getData = (req,res) => {
    const mysql = require('mysql');

    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });

<<<<<<< HEAD
    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    
=======
    const sql ="Select contents_name from e_learning.m_contents where target_user =" + req;
>>>>>>> 179cfc7b0d1f2e662cda9a8f04496ec1e45c56eb

        const sql = "SELECT C1.contents_id, C1.contents_detail_id , C1.contents_name , C1.contents_statement , C2.contents_type , C2.contents_name FROM e_learning.m_contents_detail C1 JOIN e_learning.m_contents C2 ON C1.contents_id = C2.contents_id WHERE C2.contents_id = " + req + " ORDER BY C1.contents_id";
        con.query(sql,(err, result, fields) => {
        if (err) throw err;
        res.json(result);
        });
    });
}