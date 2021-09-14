document.getElementById("forms")
    .addEventListener("submit", function(event) {
        event.preventDefault()
    })

function verificar() {
    const email = document.getElementById("email")
    const nome = document.getElementById("name")

    if (email.value && nome.value) {
        alert("Todo certo " + email.value + " " + nome.value)
    } else {
        alert("Preencha seus Dados")
    }

    email.value = ""
    nome.value = ""
}