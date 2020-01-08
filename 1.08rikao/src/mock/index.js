import Mock from "mockjs"

var data = Mock.mock({
    "list|20":[
        {
            "title":"@ctitle(6)",
            "count":"@integer(10,300)"
        }
    ]
})

Mock.mock("/api/list",data.list)