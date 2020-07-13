const Mock = require("mockjs");


module.exports = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "price": "@integer(100,500)",
        // "price|100-500":1
        "url": "@image(200x100,@color,@city)",
        "id": "@id",
        "checked": false
    }]
})