const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const myaqlssh = require('mysql-ssh');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {

 myaqlssh.connect(
     {
         host: '54.250.240.189',
         user: 'ubuntu',
         privatekey: fs.readFileSync(path.resolve(__dirname,'../') + '/key_elearning.pem')
     },
 )
 .then(client => {
    const sql = "SELECT C2.contents_name, C1.contents_id, contents_detail_id, contents_statement, choice1, choice2, choice3, choice4, answer FROM e_learning.m_contents_detail AS C1 JOIN e_learning.m_contents AS C2 ON C1.contents_id = C2.contents_id WHERE C1.contents_id = " + req + " ORDER BY contents_detail_id";
    client.querly(sql, (err,results,fields) => {
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