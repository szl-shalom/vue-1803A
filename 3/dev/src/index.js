import Axios from "axios";

Axios.get("/api/list").then(result=>{
    console.log(result)
})