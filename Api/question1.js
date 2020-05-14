// exports.mysqlConnect = () => {
//     const mysql = require('mysql');

//     const con = mysql.createConnection( {
//         host: 'localhost',
//         user: 'root',
//         password: '',
//     });

//     con.connect((err) => {
//         if(err) throw err;
//         console.log('connected!');

//         const sql = "select contents_id, contents_detail_id, contents_statement, choice1, choice2, choice3, choice4, answer from test.m_contents_detail where contents_id = 1 order by contents_detail_id ";
//         con.query(sql, (err, result, fields) => {
//             if(err) throw err;
//             console.log(result);
//         })
//     });
// }