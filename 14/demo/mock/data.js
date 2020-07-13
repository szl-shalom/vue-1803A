const Mock = require("mockjs");

module.exports = Mock.mock({
    "list|6-12": [{
        "title": "@ctitle",
        "desc": "@cword(30)",
        "price|1-100": 1,
        "id": "@id",
        "url": Mock.Random.image("200x100", '#50B347', '#FFF', "item"),
    }]
})