// ライブラリ読み込み
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const M_001 = require('./Api/M_001');

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
app.get('/api/m_001',(req, res) => {
  M_001.getData(req,res);
});

//サーバ起動
app.listen(port);
console.log('Server listen on port:' + port);