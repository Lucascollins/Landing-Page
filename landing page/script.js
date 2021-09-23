document.getElementById("forms")
    .addEventListener("submit", function(event) {
        event.preventDefault()
    })


const login = document.getElementById("login")
const span = document.getElementById("span")
const send = document.getElementById("underline-send")



function verificar() {
    const email = document.getElementById("email")
    const nome = document.getElementById("name")
    var obj = {
        email:email.value,
        nome:nome.value
    }

    //Regex
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //Confirmation email
    var ver  = email.value.includes("@")
    var verificar =  emailRegex.test(email.value)

    if (nome.value && verificar) {
        ConfirmLogin()
        console.log(obj)
    } else {
       NotConfirmLogin()
    }


    setTimeout(()=>noneModel(login),2000)

    email.value = ""
    nome.value = ""
    
}
function ConfirmLogin(){
    login.style.display = "flex"
    span.textContent = "Enviado com Sucesso"
    send.style.backgroundColor = "#00DF5E"
    span.style.color = "#00DF5E"
    login.style.border ="solid 3px #00DF5E"
    
    

}
function NotConfirmLogin(){
    login.style.display ="flex"
    span.textContent = "Sem Sucesso" 
    send.style.backgroundColor = "red"
    span.style.color = "red"
    login.style.border ="solid 3px red"
    
}

function noneModel(element){
    
    element.style.display = "none"
}

//arrowfunction,o porque usar ela
const displayNone = (element) => { 
    element.style.display = "none"
}
