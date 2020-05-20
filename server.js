// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
<<<<<<< HEAD
// const M_001 = require('./Api/M_001');
// const S_001 = require('./Api/S_001');
// const S_002 = require('./Api/S_002');
// const S_003 = require('./Api/S_003');
const test = require('user.jsx')
=======
const menu = require('./Api/menu');
const slide = require('./Api/slide');
const question = require('./Api/question');
const userName = require('./Api/userName');
>>>>>>> origin

//body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000; // port番号を指定


// GET http://localhost:4000/api/v1/
app.get('/v1/',(req, res) => {
    res.json({
        Massage:"Hello,world"
    });
<<<<<<< HEAD
});　
// app.get('/api/m_001',(req, res) => {
//   M_001.getData(req,res);
// });
// app.get('/api/s_001',(req, res) => {
//   S_001.slidescreen(req,res);
// });
// app.get('/api/s_002',(req, res) => {
//   S_002.verification_screen(req,res);
// });
// app.get('/api/s_003',(req, res) => {
//   S_003.end_screen(req,res);
app.get('user.jsx', (req,res) => {
  test.s_004(req,res);
=======
});
app.get('/api/menu',(req, res) => {
  menu.getData(req,res);
});
app.get('/api/slide',(req, res) => {
  slide.getData(req,res);
});
app.get('/api/question',(req, res) => {
  question.getData(req,res);
});
app.get('/api/userName',(req, res) => {
  userName.getData(req,res);
>>>>>>> origin
});

//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);