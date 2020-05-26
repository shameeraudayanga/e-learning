/**
 * MySQLを接続します
 * @param mysql   MySQLモジュール
 * @param express expressモジュール　仕方
 */
exports.MySQLStart = function(mysql,express)
{
    const MySQLConnect = mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'',
        database:'quizgame'
    });
    MySQLConnect.connect(function(error)
    {
        //接続エラー
        if(error)
        {
            throw error;
        }
        console.log("接続成功");

        //クエリパラメータ(補助)
        


        let query_param =
        {
          sql:'SELECT * FROM m_user WHERE user_id = ?;',
          values:["2"]
        };

        express.get('/api/m_user',function(req,res)
        {
            MySQLConnect.query(query_param,function (error, results, fields)
            {
              if(results)
              {
                res.send(fields);
              }
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