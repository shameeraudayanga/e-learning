exports.contents_detail_id = () => {
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
        });
const Sql='CREATE TABLE IF NOT EXISTS M_Contents_Detail'+
    `contents_id int(3) NOT NULL, PRIMARY KEY(contents_id,contents_detail_id)`+
    `contents_detail_id int(3) default NULL`+
    `contents_name varchar(50) character set utf8 default NULL`+
    `contents_statement varchar(100) character set utf8 default NULL`+
    `choice1 varchar(100) character set utf8 default NULL`+
    `choice2 varchar(100) character set utf8 default NULL`+
    `choice3 varchar(100) character set utf8 default NULL`+
    `choice4 varchar(100) character set utf8 default NULL`+
    `answer int(3) default NULL)`; console.log(sql);
  //ENGINE=MyISAM DEFAULT CHARSET=latin1;




const Sql ='INSERT INTO ,m_contents_detail`(`contents_id`, `contents_detail_id`, `contents_name`, `contents_statement`, `choice1`, `choice2`, `choice3`, `choice4`, `answer`)'+
            "VALUES (1, 1, '個人情報保護研修1', '個人情報とは何を指すか。下記の4つの中から選びなさい', '氏名', '電話番号', '住所', '勤務先', 3)"+ 
            "(1, 2, '個人情報保護研修1', '個人情報とは何を指すか。下記の4つの中から選びなさい', '氏名', '電話番号', '住所', '勤務先', 3)"+
            "(2, 1, '敬語1', '下記の4つの中から敬語として誤っているものを選びなさい', '昼食を召し上がりましたか', '昼食をいただかれましたか', '昼食をお食べになりましたか', '昼食を食べられましたか', 2)"
            "(2, 2, '敬語1', '下記の4つの中から電話対応として適切なものを選びなさい', '（上司の）Ｂ課長は、外出しております', '（上司の）Ｂは、外出しております', '（上司の）Ｂは、外出されています', '（上司の）Ｂ課長は外出されています', 2)"+
            " (4,1,'個人情報保護研修1','個人情報とは　個人情報の意味　特定の個人を特定することができる情報を意味する',NULL,NULL,NULL,NULL,NULL)"+
            "(3,1,'研修','個人情報を選びなさい','氏名','住所','電話番号','勤務先',3)"+
            "(3,2,'英語','形容詞を選びなさい','big','japan','bird','camera',1)"+
            "(3,3,'英語','形容詞を選びなさい','big','dog','bird','camera',1)";

con.query(sql,(err,result,fields) =>{
    if(err) throw err;
});
}