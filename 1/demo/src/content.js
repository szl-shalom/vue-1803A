function Content() {
    let root = document.querySelector("#root")

    let content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = "content";
    root.appendChild(content)
}


export default Content;
