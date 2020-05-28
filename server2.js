// ライブラリ読み込み
const express          = require('express');
const app              = express();
const bodyParser       = require('body-parser');
//MySQLへの接続
const mysqlssh         = require('mysql-ssh');
const filesystem       = require('fs');
const userName         = require('./Api_aws/userName.jsx');
//const slidemodule      = require('./Api/slide.jsx');
//const historymodule    = require('./Api/history.jsx');
//const menu = require('./Api/menu');
//const slide = require('./Api/slide');
//const question = require('./Api/question');

//body-parserの設定 input属性の値を取得出来るようにする
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定

//サーバ起動
app.listen(port);
//MySQL以降の操作ここから
console.log('Server listen on port:' + port);

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
