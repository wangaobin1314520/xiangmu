// import Mock from "mockjs";
const Mock = require("mockjs");

var data = Mock.mock({
    "list|10":[
        {
            "id|+1":0,
            "img":"@image(100x80,@color(),@city())",
            "name":"@cname(4)",
            "title":"@ctitle(6)",
        }
    ]
})

Mock.mock("/api/list",data.list)

export default {data};