function toggleMode() {
    const html = document.documentElement
    const modeName = document.getElementById("mode-name")

    html.classList.toggle("light")

    if (html.classList.contains("light")) {
        modeName.textContent = "Claro"
    } else {
        modeName.textContent = "Escuro"
    }
}

