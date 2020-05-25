// ライブラリ読み込み
const express = require('express');
const app     = express();
//MySQLへの接続
const mysql            = require('mysql');
const bodyParser       = require('body-parser');
const slidemodule      = require('./S_001/slide');
const historymodule      = require('./S_001/history');
//const menu = require('./Api/menu');
//const slide = require('./Api/slide');
//const question = require('./Api/question');
//const userName = require('./Api/userName');

//body-parserの設定 input属性の値を取得出来るようにする
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定


app.get('/api/menu',(req, res) => {
    menu.getData(req,res);
});
app.get('/api/slide/:condition',(req, res) => {
  slide.getData(req.params.condition,res);
});
app.get('/api/question',(req, res) => {
  question.getData(req,res);
});
app.get('/api/userName/:condition',(req, res) => {
  userName.getData(req.params.condition,res);
});

//サーバ起動
app.listen(port);
//MySQL以降の操作ここから
console.log('Server listen on port:' + port);
slidemodule.MySQLStart(mysql,app);
historymodule.MySQLStart(mysql,app);
