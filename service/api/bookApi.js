const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sqlMap');  // import common sql sentence

const conn = mysql.createConnection(models.mysql);
conn.connect();

router.post('/showBook', (req, res) => {
	const params = req.body;
	const sel_book = $sql.book.select + " where userid = '" + params.userName + "'";
    // const sel_email = $sql.user.select + " where email = '" + user.email + "'";
	// console.log(sel_sql);
    console.log("-------------------select book--------------------")
    console.log(params);
    conn.query(sel_book, params.userName, (err, rst) => {
        if(err){
            throw err;
        }
        console.log(typeof(rst[0]));
        // for(let i of rst){
        //     console.log(i);
        // }
        console.log(rst[0].bookid);
        // console.log(typeof(rst[0]));
        res.send(rst);
    });

});
// 注册接口
router.post('/addBook', (req, res) => {
	const params = req.body;
	const add_sql = $sql.user.add;
	// console.log(sel_sql);

    conn.query(add_sql, [params.bookName, params.wordNum, params.bookIntro, params.username], (err, rst) => {
        if (err) {
            console.log(err);
        } else{
            console.log(rst);
            res.send("0"); // 0 表示用户创建成功
        }
    });

});

module.exports = router;