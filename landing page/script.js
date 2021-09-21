document.getElementById("forms")
    .addEventListener("submit", function(event) {
        event.preventDefault()
    })

function verificar() {
    const email = document.getElementById("email")
    const nome = document.getElementById("name")
    var obj = {
        email:email.value,
        nome:nome.value
    }

    if (email.value && nome.value) {
        ConfirmLogin()
        console.log(obj)
    } else {
       NotConfirmLogin()
    }

    email.value = ""
    nome.value = ""
    
}
function ConfirmLogin(){
    const login = document.getElementById("login")
    const span = document.getElementById("span")
    login.style.display = "block"
    span.textContent = "Enviado com Sucesso"

}
function NotConfirmLogin(){
    const login = document.getElementById("login")
    const span = document.getElementById("span")
    login.style.display ="block"
    span.textContent = "Errou"  
}

