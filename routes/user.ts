// 入口
const {UserModel} = require('../model/UserModel')
export default function(app:any) {
	console.log('路由展开成功')
	app.get('/getName',function(req:any,res:any){
		UserModel.find(req.query,(e:any,r:any)=>{
			if(e) throw e;
			console.log(r)
			res.send(r)
		})
	})
	app.post('/addUser',function(req:any,res:any){
		
		const userDoc = new UserModel(req.body)
		console.log('----')
		console.log(req.body)
		userDoc.save((err:any) => {
			if(err) throw err;
			res.send({
				msg:'新增成功'
			})
		})
	})
	
}