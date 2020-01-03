const Mock = require("mockjs")

var data = Mock.mock({
    "list|6":[{
        "img":"@image(100x100,@color())",
        "title":"@ctitle(4)"
    }]
})

module.exports = data