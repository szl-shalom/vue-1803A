const {
    resolve
} = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
// webpack配置文件
module.exports = {
    // 1、打包的文件  是 src/index.js
    entry: "./src/index.js",
    // 2、打包出口文件的名名称  app.js
    output: {
        filename: "app.js",
        // 必须绝对路径
        path: resolve(__dirname, "build"),
    },
    // 3、插件
    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板文件
            template: "./src/index.html",
            // 改名字
            // filename:"qwe.html"
        })
    ],
    // 模块 是一个对象
    module: {
        // 规则 是一个数组
        // 每一个对象都是挑规则
        rules: [{
            // 匹配图片
            test: /\.(jpg|png|gif)$/,
            use: [{
                // 处理loader
                loader: "file-loader",
                // 配置
                options: {
                    // 图片名称  
                    name: "[name].[ext]",
                    outputPath: "images/"
                }
            }]
        }, {
            // 匹配css | scss
            test: /\.(css|scss)$/,
            // css-loader 打包css模块的语法
            // style-loader 插入到页面的style
            loader: "style-loader!css-loader!sass-loader"
        }, {
            // 处理js
            test: /\.js$/,
            // 不处理的目录
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env"]
                }
            }]
        }, {
            // 处理iconfont
            test: /\.(eot|svg|ttf|woff2?)$/,
            use: [{
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts/"
                }
            }]
        },{
            test:/\.html$/,
            loader:"html-loader"
        }]
    },
    // 开发服务器
    devServer: {
        // 端口号
        port: 3000,
        // 主机地址 任意iP可以进入
        host: "0.0.0.0",
        // 打开浏览器
        // open: true,
        // 热跟新
        hot: true
    }
}