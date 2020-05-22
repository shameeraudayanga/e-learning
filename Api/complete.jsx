// サンプル
// app.post('/', (req, res) => {
//     const sql = "INSERT INTO users SET ?"

// con.query(sql, req.body, function(err, result, fields) {
//     if(err) throw err;
//     console.log(result);
//     res.send('登録が完了しました');
//   });
// });


app.post('/', (req, res) => {
    const sql = "INSERT INTO t_history SET attending_data = "

con.query(sql, req.body, function(err, result, fields) {
    if(err) throw err;
    console.log(result);
    res.send('登録が完了しました');
  });
});