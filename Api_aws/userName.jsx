// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysqlssh = require('mysql-ssh');
const fs = require('fs');
const path = require('path');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {

 mysqlssh.connect(
   {
     host: '54.250.240.189',
     user: 'ubuntu',
     privateKey: fs.readFileSync(path.resolve(__dirname,'../') + '/key_elearning.pem')
   },
   {
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'e_learning'
   }
 )
 .then(client => {
   client.query("select * from e_learning.m_user where user_id = " + req, function (err, results, fields) {
     if(err) throw err
     console.log(results);
     res.json(results);
     mysqlssh.close()
   })
 })
 .catch(err => {
   console.log(err);
 })
}