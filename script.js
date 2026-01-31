// Função para alternar entre as opções de "claro" e "escuro" na parte de Estilo do convite. Altera as cores do botão switch e o nome ao lado.
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


// Fazer com que a div de erro apareça somente quando tiver um erro na seleção da imagem para foto de capa. Mudar o texto que aparece de acordo com o erro (formato errado ou não selecionou imagem).
const form = document.querySelector("form")
const fileInput = document.getElementById("cover-photo")
const errorDiv = document.getElementById("file-error")
const errorSpan = errorDiv.querySelector("span")

form.addEventListener("submit", function (event) {

    const file = fileInput.files[0]
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"]

    if (!file) {
        event.preventDefault()
        errorDiv.style.display = "flex"
        errorSpan.textContent = "Selecione uma imagem para continuar."

        return
    } if (!allowedTypes.includes(file.type)) {
        event.preventDefault()
        errorDiv.style.display = "flex"
        errorSpan.textContent = "Formato inválido. Selecione uma imagem."

        return
    } else {
        errorDiv.style.display = "none"
    }
})