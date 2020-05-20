exports.slide = () =>
{
    const mysql = require('mysql');
    con.connect(function(err)
    {
        if (err)
        {
            throw err;
        }
        console.log('Connected!');
    });
    const con = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:''
    });
    con.connect(function(err)
    {
        if(err)
        {
            throw err;
        }
        console.log('Connected!');

        //抽出条件 SELECT
        let sqlcommand = 'SELECT * FROM m_contents';

        con.query(sqlcommand,(err,result,fields) =>
        {
            console.log(result);
            if(err)
            {
                throw err;
            }

            sqlcommnd   = 'SELECT * FROM m_contents_detail';
            con.query(sqlcommnd,(error,result,fields) => {
                // 2回目のクエリ
            });
        });
    });
}

//複数
// const sql = 'user_id ,int(3) ,NOT, NULL ,PRIMARY ,KEY' + 
// ' user_name ,varchar(50) ,character ,set,utf8 ,default ,NULL';
  // const sql = 'CREATE TABLE (' +
// 'カラム名 Integer,'+
// 'カラム名2 varchar(50)' +
// + ')';
// console.log(sql);
// const sql = 'CREATE TABLE IF NOT EXISTS m_contents(
//     "contents_id int(3) NOT NULL PRIMARY KEY;"
//     "contents_name varchar(50) CHARACTER SET utf8 DEFAULT NULL;"
//     "contents_type cher(1) DEFAULT NULL;"
//     "target_user int(3) DEFAULT NULL;"
//     )ENGINE = MyISAM EFAULT CHARSET = latin1;+