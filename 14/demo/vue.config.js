const data = require("./mock/data.js")
const bodyParser = require("body-parser")




module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            // 将post的数据挂载 到 req.body
            app.use(bodyParser.json())

            // 数据接口
            app.get("/api/list", (req, res) => res.json(data))
            // 根据id返回数据
            app.get("/api/getData", (req, res) => {
                let {
                    id
                } = req.query;
                let obj = data.list.find(item => item.id === id);
                res.json(obj)
            })
            // 登录接口
            app.post("/api/login", (req, res) => {
                let {
                    username,
                    password
                } = req.body;
                if (username === "bawei" && password === "110") {
                    res.json({
                        code: 1,
                        token: "bawei"
                    })
                } else {
                    res.json({
                        code: 0
                    })
                }

            })
        }
    }
}