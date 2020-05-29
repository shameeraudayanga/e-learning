const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const mysqlssh = require('mysql-ssh');
const fs = require('fs');
const path =require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


exports.getData = (req,res) => {

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
    client.query("SELECT C1.contents_id, C1.contents_detail_id , C1.contents_name , C1.contents_statement , C2.contents_type , C2.contents_name FROM e_learning.m_contents_detail C1 JOIN e_learning.m_contents C2 ON C1.contents_id = C2.contents_id WHERE C2.contents_id = " + req + " ORDER BY C1.contents_id", function (err, results, fields) {
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