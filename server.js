// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const menu = require('./Api/menu');
const slide = require('./Api/slide');
const question = require('./Api/question');
const userName = require('./Api/userName');
const history = require('/Api/history');


//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 4000; // port番号を指定


// GET http://localhost:4000/api/v1/
// app.get('/api/v1/',function(req,res){
//     res.json({
//         Massage:"Hello,world"
//     });
// });

app.get('/M_001/',function(req,res) {
    res.json({
        
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

//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);