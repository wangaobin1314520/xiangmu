import Mock from "mockjs"

const types = [0,1,2,3,4,5]

Mock.mock("/api/left",types)

var data = Mock.mock({
    "list|30":[
        {
            "id|+1":0,
            "type|+1":types,
            "title":"@ctitle(6)",
        }
    ]
})
Mock.mock("/api/list",data.list)