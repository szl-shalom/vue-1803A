const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    // 打包入口文件
    entry: "./src/index.js",
    // 打包出口
    output: {
        // 文件出口名字
        filename: "qwe.js",
        // 文件出口目录  必须是绝对路径 
        path: path.resolve(__dirname, "app")
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]

}