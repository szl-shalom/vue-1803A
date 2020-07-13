const data = require("./mock/data.js")

module.exports = {
    lintOnSave: false,
    devServer: {
        before(app) {
            app.get("/api/list", (req, res) => res.json(data));
            app.get("/api/getData",(req,res)=>{
                let { id } = req.query;
                res.json(data.list.find(item=>item.id === id));
            })
        }
    }
}