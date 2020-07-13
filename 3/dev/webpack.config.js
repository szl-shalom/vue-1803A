const HtmlWebpackPlugin = require("html-webpack-plugin");
const Mock = require("mockjs");
module.exports = {
    entry: "./src/index.js",
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => {
                res.json(Mock.mock({
                    "list|4-10":[{
                        "id":"@id",
                        "name":"@cname",
                        "title":"@ctitle",
                        "price|30-100":1,
                        "count|2-5":1,
                        "url":"@image(100x200)"
                    }]
                }))
            })
        }
    }
}