exports.username = () => {
    const username = require('mysql');
  
    con.connect(function(err) {
      if (err) throw err;
      console.log('Connected');
      const sql = 'select * from e_learning.m_user where user_id = :user_id';
  
      con.query(sql, function (err, result, fields) {  
      if (err) throw err;  
      console.log(result)
      });
    });
  
  
  }
//Express.jsの利用
// const express =require('express');
// const app = exports();
// console.log("slid");
// const http = require('http');
// app = http.createserver();
//app.listen(.'');
console.log('server listening...');

// using System;


// exports.mysqlconnect = () => {
//     const mysql = require('mysql');
//        const con = mysql.createConnection({
//            host: 'localhost',
//            user: 'root',
//            password:''
//        });
//        con.connect(function(err) {
//         if (err) throw err;
//         console.log('Connected!');
       
        
//         const sql = 3
       

        

//         const sql = 'INSERT ,INTO, M_User' ('user_id','user_name')
//         "VALUES(1,'田中太郎')"+
//         "(2,'山田花子')"+
//         "(3,'フォース次郎')";
//         con.query(sql,(err,result,fields) => {
//             if (err) throw err;

//             console.log(result);
//             console.log(result['田中太郎','山田花子','フォース次郎'].username);
//         });
       
        //1行
        // const sql = 'SELECT * FROM テーブル名';
        
        //複数
        // const sql = 'user_id ,int(3) ,NOT, NULL ,PRIMARY ,KEY' + 
        // ' user_name ,varchar(50) ,character ,set,utf8 ,default ,NULL';

          // const sql = 'CREATE TABLE (' +
        // 'カラム名 Integer,'+
        // 'カラム名2 varchar(50)' + 
        // + ')';
        // console.log(sql);
        // const sql = 'CREATE' ,TABLE,IF ,NOT ,EXISTS ,`m_user`(
        //     `user_id` ,'int'(3) ,'NOT', 'NULL' ,'PRIMARY' ,KEY
        //     `user_name` ,'varchar'(50) ,'character' ,'set','utf8 ','default' ,NULL
        //  ) 'ENGINE'='MyISAM','DEFAULT','CHARSET'= latin1;