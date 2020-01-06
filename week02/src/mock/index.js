import Mock from "mockjs"

// 轮播图数据
var swiperImg = Mock.mock({
    "list|6":[
        {
            "id|+1":0,
            "img":"@image(375x200,@color())"
        }
    ]
})

// 轮播图接口
Mock.mock("/api/swiperImg",swiperImg.list)

const types = [0,1,2]
// 首页数据
var data = Mock.mock({
    "list|18":[
        {
            "id|+1":0,
            "index|+1":types,
            "img":"@image(150x100,@color())",
            "title":"@ctitle(8)",
            "price":"@integer(10,100)",
            "count":0,
            "isCheck":false
        }
    ]
})
// 首页数据接口
Mock.mock("/api/list",data.list)

// tab切换数据
var tabData = ["热卖商品","店家推荐","跳楼促销"]
Mock.mock("/api/tabData",tabData)