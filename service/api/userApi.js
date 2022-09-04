const models = require('../db');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const $sql = require('../sqlMap');  // import common sql sentence

const conn = mysql.createConnection(models.mysql);
conn.connect();

// 登录接口                              
router.post('/login',(req,res)=>{
    // console.log(req);
	const user = req.body;
	const sel_email = $sql.user.select + " where email = '" + user.email + "'";
	// console.log(sel_email);
	conn.query(sel_email, user.email, (error, results)=>{
		if (error) {
			throw error;
		}
	// 	console.log(results)
		if (results[0] === undefined) {
			res.send("2|");  // -1 表示查询不到，用户不存在，即邮箱填写错误
		} else{
			if (results[0].email == user.email && results[0].password == user.password) {
                // console.log("0"+results[0].username);  // 0 表示用户存在并且邮箱密码正确
				res.send("0|"+results[0].username);  // 0 表示用户存在并且邮箱密码正确
				
			} else{
				res.send("1|");  // 1 表示用户存在，但密码不正确
			}
		}
	})
});

// 注册接口
router.post('/add', (req, res) => {
	const params = req.body;
	const sel_sql = $sql.user.select + " where username = '" + params.username + "'";
	const add_sql = $sql.user.add;
	// console.log(sel_sql);
	conn.query(sel_sql, params.username, (error, results) => {
		if(error) {
			console.log(error);
		}
		if (results.length != 0 && params.username == results[0].username) {
			res.send("-1");   // -1 表示用户名已经存在
		} else {
			conn.query(add_sql, [params.username, params.email, params.password], (err, rst) => {
				if (err) {
					console.log(err);
				} else{
					console.log(rst);
					res.send("0"); // 0 表示用户创建成功
				}
			});
		}
	});
});

module.exports = router;