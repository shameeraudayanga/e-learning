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

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
    

        const sql = "SELECT C1.contents_id AS コンテンツ番号, C1.contents_detail_id AS コンテンツ詳細番号 , C1.contents_name AS コンテンツ詳細名 , C1.contents_statement AS 主文 , C2.contents_type AS コンテンツ分類 , C2.contents_name AS コンテンツ名 FROM test.m_contents_detail C1 JOIN test.m_contents C2 ON C1.contents_id = C2.contents_id WHERE C2.contents_id = 4 ORDER BY C1.contents_id";
        con.query(sql,(err, result, fields) => {
        if (err) throw err;
        res.json(result);
        });
    });
}