const data = require("./public/mock/index.js")
console.log(data.list)

module.exports = {
    lintOnSave:false,//关闭代码检测工具
    devServer:{
        before(app){
            // 列表页接口
            app.get("/api/list",(req,res)=>{
                res.json({
                    errCode:0,
                    list:data.list
                })
            })
        }
    }
}