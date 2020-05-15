exports.username = () => {
  const username = require('mysql');

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    const sql = "Select user_id ,user_name CASE WHEN user_id = 1 THEN '田中太郎' WHEN user_id = 2 THEN '山田花子' WHEN user_id = 3 THEN 'フォース次郎' else 99 end from m_user";

    con.query(sql, function (err, result, fields) {  
    if (err) throw err;  
    console.log(result)
    });
  });


}