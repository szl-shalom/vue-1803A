function Footer() {
    let root = document.querySelector("#root")
    let footer = document.createElement("div");
    footer.classList.add("footer");
    footer.innerHTML = "footer";
    root.appendChild(footer)
}

export default Footer;