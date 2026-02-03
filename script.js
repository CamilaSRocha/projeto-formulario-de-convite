const form = document.querySelector("form")
const fileInput = document.getElementById("cover-photo")
const errorDiv = document.getElementById("file-error")
const errorSpan = errorDiv.querySelector("span")

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

// Faz com que o span que fica ao lado da seleção mostre escrito o nome do arquivo selecionado. Caso não mostre, aparece o que já está escrito no HTML que é "Nenhum arquivo selecionado".
fileInput.addEventListener('change', function(event) {

    const file = event.target.files[0]
    const uploadSpan = document.getElementById("upload-span")

    if (file) {
        uploadSpan.textContent = (file.name)
    }
})

// Faz com que a div de erro apareça somente quando tiver um erro ao não preencher o input obrigatório. Também coloca uma outline vermelha em volta do input. 
form.addEventListener("submit", (e) => { 

    const inputElement = document.getElementById("name") 
    const errorDiv = document.getElementById("input-error") 
    const errorSpan = errorDiv.querySelector("span") 

    if (!inputElement.checkValidity()) { 
        e.preventDefault() 
        errorDiv.style.display = "flex" 
        errorSpan.textContent = "Campo obrigatório" 
        inputElement.classList.add('invalid-field') 
    } else { 
        inputElement.classList.remove('invalid-field') 
    } 
})


