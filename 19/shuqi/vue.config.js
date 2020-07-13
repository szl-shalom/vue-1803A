const data = require("./mock/data.js");
const bodyParser = require('body-parser')
module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // parse application/x-www-form-urlencoded
            app.use(bodyParser.urlencoded({
                extended: false
            }))
            // parse application/json
            app.use(bodyParser.json())
            // 轮播
            app.get("/api/banner", (req, res) => {
                res.json(data.urls)
            })
            // 女生
            app.get("/api/girl", (req, res) => {
                res.json(data.girl)
            })
            // 男生
            app.get("/api/boy", (req, res) => {
                res.json(data.boy)
            })
            // 通过ID返回数据
            app.get("/api/getData", (req, res) => {
                let {
                    id
                } = req.query;
                res.json(data.girl.find(item => item.id === id));
            })
            // 登录接口
            app.post("/api/login", (req, res) => {
                let {
                    username,
                    password
                } = req.body;
                if (username === "张三" && password === "123") {
                    res.json({
                        code: 1,
                        token: username
                    })
                } else {
                    res.json({
                        code: 0,
                    })
                }
            })
        }
    }
}