exports.slide = () => {
    const mysql = require('mysql');
       
     
       con.connect(function(err) {
        if (err) throw err;
        console.log('Connected!');
        con.query('CREATE DATABASE express_db',function(err,result){
        if(err) throw err;
            console.log('database created');        
       });
    });


        const con = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:''
        });
        con.connect(function(err){
            if(err)throw err;
            console.log('Connected!');
         

        const let = 'CREATE TABLE (contents_id int(3) NOT NULL PRIMARY KEY '+
        'contents_name varchar(50) CHARACTER SET utf8 DEFAULT NULL'+
        'contents_type cher(1) DEFAULT NULL' +
        'target_user int(3) DEFAULT NULL)';
        console.log(sql);

            const Sql = 'INSERT INTO ,m_contents` (`contents_id`, `contents_name`, `contents_type`, `target_user`)'
            "VALUES (1,'確認問題①',2,1)"+
                "(2,'確認問題②',2,2)"+
                "(3,'確認問題③',2,3)"+
                "(4,'スライド①',1,1)"+
                "(5,'確認問題④',2,2)"+
                "(6,'確認問題⑤',2,3)";

            con.query(sql,(err,result,fields) =>{
                if(err) throw err;
            })
        }

           //複数
        // const sql = 'user_id ,int(3) ,NOT, NULL ,PRIMARY ,KEY' + 
        // ' user_name ,varchar(50) ,character ,set,utf8 ,default ,NULL';

          // const sql = 'CREATE TABLE (' +
        // 'カラム名 Integer,'+
        // 'カラム名2 varchar(50)' + 
        // + ')';
        // console.log(sql);

        // const sql = 'CREATE TABLE IF NOT EXISTS m_contents(
        //     "contents_id int(3) NOT NULL PRIMARY KEY;"
        //     "contents_name varchar(50) CHARACTER SET utf8 DEFAULT NULL;"
        //     "contents_type cher(1) DEFAULT NULL;"
        //     "target_user int(3) DEFAULT NULL;"
        //     )ENGINE = MyISAM EFAULT CHARSET = latin1;