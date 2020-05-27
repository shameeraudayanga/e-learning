// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const menu = require('./Api_aws/menu');
const slide = require('./Api_aws/slide');
const question = require('./Api_aws/question');
const userName = require('./Api_aws/userName');

const history = require('./Api_aws/history');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定


// GET http://localhost:4000/api/v1/
app.get('/v1/',(req, res) => {
    res.json({
        Massage:"Hello,world"
    });
});
app.get('/api/menu/:condition',(req, res) => {
  menu.getData(req.params.condition,res);
});
app.get('/api/slide/:condition',(req, res) => {
  slide.getData(req.params.condition,res);
});
app.get('/api/question/:condition',(req, res) => {
  question.getData(req.params.condition,res);
});
app.get('/api/userName/:condition',(req, res) => {
  userName.getData(req.params.condition,res);
});

app.get('/test',(req,res) => {
  history.insertDate(req,res);
});

//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);