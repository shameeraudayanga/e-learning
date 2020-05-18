exports.training = () => {
    const training = require('mysql');
  
    con.connect(function(err) {
      if (err) throw err;
      console.log('Connected');
      const sql = 'select contents_name ,contents_statement from e_learning.m_contents_detail where contents_id = 4';
  
      con.query(sql, function (err, result, fields) {  
      if (err) throw err;  
      console.log(result)
      });
    });
  
  
  }