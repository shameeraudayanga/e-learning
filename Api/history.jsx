    app.post('/',(req,res) => {
        const sql = "INSERT INTO e_learning.t_history(contents_id,attending_user,attending_date) VALUES(2,3,NOW())";

        con.query(sql,req.body,function(err,result,fields){
            if(err)throw err;
            console.log(result);
            res.send('登録が完了しました');
        });
    });