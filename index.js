/* CÓDIGO ANTIGO   
percebi que por mais que esse código funcionasse, ele precisava do eventListener para a mensagem não aparecer caso os campos estivessem vazios.


function botaoFormEmail(event){
    event.preventDefault()
    let nomeVar = document.getElementById("nome")
    let emailVar = document.getElementById("email")
    let numVar = document.getElementById("celular")
    

    document.getElementById("resposta-usuario").innerHTML = `Entraremos em contato através do endereço ${emailVar.value}`


    nomeVar.value = ""
    emailVar.value = ""
    numVar.value = ""

} */

const form = document.getElementById("form")

form.addEventListener("submit" ,function(event){
    event.preventDefault()
    let nomeVar = document.getElementById("nome")
    let emailVar = document.getElementById("email")
    let numVar = document.getElementById("celular")
    

    document.getElementById("resposta-usuario").innerHTML = `Entraremos em contato através do endereço ${emailVar.value}`

    nomeVar.value = ""
    emailVar.value = ""
    numVar.value = ""

})
