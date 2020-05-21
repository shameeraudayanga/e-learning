exports.mysqlConnect = () => {
    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: '',
        user: '',
        password: ''
      });

    con.connect((err) => {
        if (err) throw err;
        console.log('Connected!');

        const sql = "select * from test.m_user";
        con.query(sql, (err, result, fields) => {
             if (err) throw err;
             console.log(result);
             console.log(result[0].user_name);
         });
    });

}