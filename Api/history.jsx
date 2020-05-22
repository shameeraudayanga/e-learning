// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req, res) => {
  const mysql = require('mysql');

  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
  });

  app.post('/', (req, res) => {
	const sql = "INSERT INTO T_history SET history_id = +req attending_user = +req contents_id = +req attending_date +req;"
	con.query(sql,req.body,function(err, result, fields){
		if (err) throw err;
		console.log(result);
		res.send('登録が完了しました');
	});
});


}