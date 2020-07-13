const Mock = require("mockjs")

module.exports = Mock.mock({
    "list|2-6": [{
        "title": "@ctitle",
        "id": "@id",
        "price|100-500": 1,
        "count|2-4": 1,
        "checked": true
    }]
})