// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const menu = require('./Api/menu');
// const slide = require('./Api/slide');
// const question = require('./Api/question');
// const userName = require('./Api/userName');

const menu = require('./Api/menu');

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定


// GET http://localhost:4000/api/v1/
app.get('/api/v1/',(req, res) => {
    res.json({
        Massage:"Hello,world"
    });
});
// app.get('/api/menu',(req, res) => {
//   menu.getData(req,res);
// });
// app.get('/api/slide',(req, res) => {
//   slide.getData(req,res);
// });
// app.get('/api/question',(req, res) => {
//   question.getData(req,res);
// });
// app.get('/api/userName',(req, res) => {
//   userName.getData(req,res);
// });

app.get('/api/menu',(req, res) => {
  menu.menu_screen(req,res);
});

// app.get('/api/menu/:userID',(req, res) => {
//   menu.getData(req.params.userID,res);
// });

//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);