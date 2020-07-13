const data = require("./mock/data.js");
module.exports = {
    lintOnSave: false,
    devServer:{
        before(app){
            // 数据接口
            app.get("/api/list",(req,res)=>res.json(data))
            // 根据id返回数据接口
            app.get("/api/getData",(req,res)=>{
                let { id } = req.query;
                let result = data.list.find(item=>item.id === id);
                res.json(result)
            })
        }
    }
}