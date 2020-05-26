// サンプル 
// app.post('/', (req, res) => { 
//     const sql = "INSERT INTO users SET ?"
// con.query(sql, req.body, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//     res.send('登録が完了しました'); 
//   });
// });
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

app.post('./Api/history', (req, res) => {
    const sql = "INSERT INTO e_learning.t_history(history_id,attending_user,contents_id,attending_date) VALUES(1,1,1,NOW())";

    
 
con.query(sql, req.body, function(err, result, fields) {
 
    if(err) throw err;

    console.log(result);
 
    res.send('登録が完了しました');
  });
});

}
