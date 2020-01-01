const Mock = require("mockjs")

// 轮播图图片
var loginImg = Mock.mock({
    "list|6":[{
        "img":"@image(500x300,@color())"
    }]
})

module.exports = loginImg;