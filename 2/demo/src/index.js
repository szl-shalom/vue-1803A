import url from "./images/1.jpg";
import "./css/index.css"
import "./sass/index.scss"
import "./fonts/iconfont.css"

let img = new Image()
img.src = url;
document.body.append(img);

let div = document.createElement("div");
div.classList.add("active");
div.innerHTML = "嘿嘿"
document.body.append(div)

let fun = () => {}
console.log(fun)