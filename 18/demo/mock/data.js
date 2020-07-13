const Mock = require("mockjs");


module.exports = Mock.mock({
    "list|6": [{
        "title": "@ctitle",
        "price": "@integer(10,200)",
        "id": "@id"
    }]
})