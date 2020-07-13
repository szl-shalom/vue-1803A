const Mock = require("mockjs");

module.exports = Mock.mock({
    "list|6": [{
        "title": "@ctitle",
        "url": "@image(200x100,@color)",
        "price": "@integer(100,500)",
        "id": "@id",
        "flag": false
    }]
})