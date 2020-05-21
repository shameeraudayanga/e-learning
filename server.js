// ライブラリ読み込み
const express = require('express');
const app     = express();
//MySQLへの接続
const mysql   = require('mysql');
const bodyParser = require('body-parser');
//const menu = require('./Api/menu');
//const slide = require('./Api/slide');
//const question = require('./Api/question');
//const userName = require('./Api/userName');

//body-parserの設定 input属性の値を取得出来るようにする
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定

/*
app.get('/api/menu',(req, res) => {
    menu.getData(req,res);
});
app.get('/api/slide',(req, res) => {
  slide.getData(req.params.condition,res);
});
app.get('/api/question',(req, res) => {
  question.getData(req,res);
});
app.get('/api/userName',(req, res) => {
  userName.getDate(req.params.condition,res);
});
*/
//サーバ起動
app.listen(port);
//MySQL以降の操作ここから

console.log('Server listen on port:' + port);

//データベース名の変更はこちら
const MySQLconnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'quizgame'
});

//MySQL への接続
MySQLconnect.connect(function(err)
{
    //接続エラー
    if (err)
    {
      throw err;
    }
    console.log("接続成功");
    let m_contents = 'SELECT * FROM m_contents;';

    let query_param =
    {
      sql:'SELECT * FROM m_user WHERE user_id = ?;',
      values:["2"]
    };

    // GET http://localhost:4000/api/m_user
    app.get('/api/m_user',function(req,res)
    {
      MySQLconnect.query(query_param,function (error, results, fields)
      {
        if(results)
        {
          res.send(fields);
          const fileName = "sql.json";
        }
      });
    });
    app.get('/api/quizgameMondai',function(req,res)
    {
      MySQLconnect.query(m_contents,function (err, result)
      {
        console.log(result);
        if(result)
        {
          res.send(result);
        }
      });
    });
});