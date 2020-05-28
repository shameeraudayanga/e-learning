const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mysqlssh   = require('mysql-ssh');
const fs         = require('fs');
const path       = require('path');

//body-parserの設定 input属性の値を取得出来るようにする
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

exports.getData = (req,res) =>
{
    res.send("テスト_getdata");
    //2段階認証により AWSとMySQLのログインを行う必要がある。
    mysqlssh.connect
    (
        {
            host:'54.250.240.189',
            user:'ubuntu',
            privatekey:fs.readFileSync(path.resolve(__dirname,'../')+'/key_elearning.pem')
        },
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database:'e_learning'
        }
    ).then(function(client)
    {
        const sql = "select * from m_user where user_id = " + req;
        client.query(sql,function(err,results,fields)
        {
            if(err)
            {
                console.log(err);
                throw err;
            }
            //console.log(results);
            res.json(results);
            mysqlssh.close();
        });
    }).catch(function(err)
    {
        console.log(err);
    });
}