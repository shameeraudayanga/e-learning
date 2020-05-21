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

    con.connect((err) => {
        if(err) throw (err);
        console.log('Connected!');
    
        const sql = "SELECT C2.contents_name AS コンテンツ名, C1.contents_id AS コンテンツ番号, contents_detail_id AS コンテンツ詳細番号, contents_statement AS 主文, choice1 AS 選択肢１, choice2 AS 選択肢２, choice3 AS 選択肢３, choice4 AS 選択肢４, answer AS 解答 FROM test.m_contents_detail AS C1 JOIN test.m_contents AS C2 ON C1.contents_id = C2.contents_id WHERE C1.contents_id = 1 ORDER BY contents_detail_id";
        con.query(sql, (err, result, fields) => {
            if(err) throw err;
            res.json(result);
        });
    });
    
}