const Mock = require("mockjs");


module.exports = Mock.mock({
    "list|6": [{
        "title": "@title",
        "id": "@id",
        "price": "@integer(100,500)",
        "url": "@image(100x100,@color,@color,@city)",
    }]
})