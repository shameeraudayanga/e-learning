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

        let set_param =
        {
          カラム名1:値,
          カラム名2:値
        };
        let query_param =
        {
          sql:'INSERT INTO e_learning SET ?',
          values:set_param
        };

        express.post('/api/t_history',function(req,res)
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