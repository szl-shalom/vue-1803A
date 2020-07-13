const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const path = require("path");
module.exports = {
    // production 生成模式  （默认）
    // development 开发模式  
    mode: "development",
    entry: {
        main: "./src/index.js",
        main1: "./src/index1.js"
    },
    output: {
        filename: "[name].js",
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader'
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "images"
                }
            }]
        }, {
            test: /\.(scss|css)$/,
            use: [{
                loader: MiniCssExtractPlugin.loader // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
        }, {
            test: /\.(eot|svg|ttf|woff2?)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts"
                }
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        host: "0.0.0.0",
        port: 3000,
        hot: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    }

}