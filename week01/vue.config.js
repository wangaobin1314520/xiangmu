const loginImg = require("./public/mock/index.js")
// console.log(loginImg)
const SwiperImg = require("./public/mock/SwiperImg.js")

module.exports = {
    lintOnSave:false, //关闭代码检测工具
    devServer:{
        before:function(app){
            // 登录页图片接口
            app.get("/api/loginimg",(req,res)=>{
                res.json({
                    errCode:0,
                    list:loginImg
                })
            })

            // 验证数据
            userData = [{
                user:"bin",
                pwd:520
            }]
            // 登录页面用户名密码接口
            app.get("/api/login",(req,res)=>{
                console.log(req.query)
                let { user , pwd } = req.query;
                let flag = userData.some(val=>val.user === user && val.pwd == pwd)

                // 如果匹配成功，返回成功数据
                if(flag){
                    res.json({
                        errCode:0,
                        msg:"success"
                    })
                }else{
                    res.json({
                        errCode:-1,
                        msg:"faild"
                    })
                }
            })

            // 轮播图接口
            app.get("/getCarouselList",(req,res)=>{
                res.json({
                    errCode:0,
                    list:SwiperImg
                })
            })
        }
    }
}