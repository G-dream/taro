const express = require('express')
const connect = require('./mongodb').default
const app = express()
const {UserModel} = require('./model/UserModel')
const UserApi = require('./routes/user').default

const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.listen(9999,function(err:any,res:any){
	if(err) throw err;
	console.log('服务器3启动成功')
	 connect() 
	 // 加载路由 
	 UserApi(app)
})