exports.slide = () => {
    const slide = require('mysql');

    con.connect(function(err) {
      if (err) throw err;
      console.log('Connected');
      const sql = "Select contents_name,contents_type from m_contents where contents_type = 1";

      con.query(sql, function (err, result, fields) {  
      if (err) throw err;  
      console.log(result)
      });
    });

  
}