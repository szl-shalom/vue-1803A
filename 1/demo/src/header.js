function Header() {
    let root = document.querySelector("#root");
    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = "header";
    root.appendChild(header)
}

export default Header;