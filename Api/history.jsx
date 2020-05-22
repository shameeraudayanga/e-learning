applicationCache.port('/',(req,res) => {
    const sql = "INSERT INTO t_history SET ?";

    con.query(sql,req.body,function(err,result,fields){
        if(err)throw err;
        console.log(result);
        res.send('登録が完了しました');
    });
});