var inpute1 = document.getElementById('inpEm')
var inpute2 = document.getElementById('inPass')

function entrar() {
    
    // Senha do Cliente gerado pelo aplicativo, exemplo: 

    var login = "maldonado@gmail.com"
    var senha = "00001111"

    if (inpute1.value != login || inpute2.value != senha) {
        window.alert("Login ou senha Inválido.")
    }else{
        return true
    }
}