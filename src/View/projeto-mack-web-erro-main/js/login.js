/* eslint-disable prettier/prettier */
function entrar(){
    var usuario = document.getElementById('username').value
    var senha = document.getElementById('password').value
   

    if(usuario !== "admin" && senha !== "admin"){
        alert("Usuario ou Senha incorretos!")
    } else{ 
        alert('Bem vindo, admin')
        location.href = 'index.html'
    }
}