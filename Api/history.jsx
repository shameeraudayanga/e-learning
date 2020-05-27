const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });

    // con.connect((err) => {
        app.get('/api/history', (req, res) => {
            const sql = "INSERT INTO t_history (history_id, attending_user, contents_id, attending_date) SELECT history_id, attending_user, contents_id '現在' AS attending_date FROM t_history";
            con.query(sql,req.body,function(err, result, fields){
                if (err) throw err;
                console.log(result);
                res.send('登録が完了しました');
            });
        });
//         if (err) throw err;
//         console.log('Connected!');

        // const sql ="SELECT history_id, attending_user, contents_id, NOW(attending_date) FROM t_history WHERE history_id = " + req;

//         con.query(sql, (err, result, fields) => {
//             if (err) throw err;
//             res.json(result);
//         });
//     });
}