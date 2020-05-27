const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


exports.getdata = (req,res) => {
    const mysql = require('mysql');

    const con = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: ''
    });

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    

        const sql = "INSERT INTO e_learning.t_history(contents_id,attending_user,attending_date) VALUES(2,3,NOW())";
        con.query(sql,(err, result, fields) => {
        if (err) throw err;
        res.send('登録が完了しました')
        });
    });
}
