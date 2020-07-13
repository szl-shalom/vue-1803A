const Mock = require("mockjs");

module.exports = Mock.mock({
    "list|100": [{
        "title": "@ctitle",
        "price": "@integer(100,200)",
        "desc": "@cword(20,30)",
        "url": "@image(200x100,@color,@city)",
        "id":"@id"
    }]
})