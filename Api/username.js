exports.username = () => {
  const username = require('mysql');

  con.connect(function(err) {
    if (err) throw err;
    console.log('Connected');
    const sql = 'select * from e_learning.m_user where user_id = 1';

    con.query(sql, function (err, result, fields) {  
    if (err) throw err;  
    console.log(result)
    });
  });


}