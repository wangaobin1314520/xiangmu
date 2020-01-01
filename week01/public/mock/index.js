const Mock = require("mockjs")

// 登录页图片
var loginImg = Mock.mock({
    "list":[{
        "img":"@image(500x300,@color())"
    }]
})

module.exports = loginImg;