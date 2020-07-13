const Mock = require("mockjs");

module.exports = Mock.mock({
    "urls|5": ["@image(200x100,@color,@color,@datetime)"],
    "girl|6": [{
        "title": "@ctitle",
        "author": "@cname",
        "id": "@id",
        "desc": "@cword(20,40)",
        "url": "@image(100x150,@color,@title)",
    }],
    "boy|6": [{
        "title": "@ctitle",
        "author": "@cname",
        "id": "@id",
        "desc": "@cword(20,40)",
        "url": "@image(100x150,@color,@title)",
    }]
})