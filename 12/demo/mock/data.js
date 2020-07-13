const Mock = require("mockjs");
module.exports = Mock.mock({
    "list|4": [{
        "title": "@ctitle",
        "price|100-200": 1,
        "desc": "@cword(20)",
        "id": "@id",
        "url": "@image(200x100)"
    }]
})