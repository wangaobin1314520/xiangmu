import Mock from 'mockjs'
import qs from 'qs'

var data = Mock.mock({
    "list|10":[
        {
            "id|+1":0,
            "img":"@image(100x80,@color(),@city())",
            "title":"@ctitle(6)"
        }
    ]
})

Mock.mock("/api/list",data.list)

Mock.mock(/\/api\/list\.*/,function(opts){
    console.log(qs.parse(opts.url.split("?")[1]))
    let { id } = qs.parse(opts.url.split("?")[1])
    let flag = data.list.filter(item=>item.id===id*1)
    // console.log(flag)
    return flag
})