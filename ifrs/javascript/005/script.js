function submitForm(){
    if (document.getElementById("nome").value == "" && document.getElementById("idade").value =="") {
        alert("Digite os campos restantes")
        return false
    } else {
        alert("Seja bem vindo " + document.getElementById("nome").value)
        return true
    }
}