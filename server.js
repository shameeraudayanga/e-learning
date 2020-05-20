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
  userName.getDate(req,res);
});
*/
//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);

//SQLの回答データ
let sampledata = null;

const MySQLconnect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'quizgame'
});

//MySQL への接続
MySQLconnect.connect(function(err)
{
    if (err)
    {
      throw err;
    }
    console.log("接続成功");
    let q = 'SELECT * FROM m_user;';
    MySQLconnect.query(q,function (err, result)
    {
      console.log(result);
      if(result)
      {
        sampledata = result;
      }
    });
    // GET http://localhost:4000/api/v1/
    app.get('/api/v1/',function(req,res){
      res.send(sampledata);
      /*
      res.json(
      {
        value:Hello,World
      });
      */
    });
});