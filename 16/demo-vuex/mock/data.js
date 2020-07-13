const Mock = require("mockjs");

module.exports = Mock.mock({
    "list|10": [{
        "title": "@ctitle",
        "done": "@boolean",
        "id": "@id"
    }]
})