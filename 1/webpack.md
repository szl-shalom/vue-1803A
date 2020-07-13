# 安装
- npm init --y
- npm i webpack webpack-cli -D
- npx webpack -v 查询版本

# 配置脚本命令
- package.json
```
    scripts:{
        "build":"webpack"
    }

    npm run build

```

# webpack.config.js  必须是这个名字
```javascript
module.exports = {
    const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

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

```

# html-webpack-plugin 
- npm i html-webpack-plugin -D
- 引入 const HtmlWebapckPlugin = require("html-webpack-plugin");
- 调用
```javascript
plugins:[
        new HtmlWebpackPlugin({
            // 你要打包的HTMLM模块
            template:"./src/index.html"
        })
    ]

```