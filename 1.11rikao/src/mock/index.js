import Mock from "mockjs"

const indexs = [ 0 , 1 , 2 , 3 ]
var data = Mock.mock({
    "list|4":[
        {
            "index|+1":indexs,
            "children|20":[
                {
                    "id|+1":0,
                    "img":"@image(100x100,@color(),@city())",
                    "title":"@ctitle(10)",
                    "price":"@integer(100,200)"
                }
            ]

        }
    ]
})

Mock.mock("/api/list",data.list)