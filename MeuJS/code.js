
function imprime(){
    let lg = document.getElementById("login").value
    let ps = document.getElementById("pass").value
    let senha = "panterao"

    if(ps == senha){
        alert("Seu login é: " + lg)
        alert("Sua senha é: " + ps)
        alert("Você está logado.")
    } else{
        alert("Senha ou usuário incorreto.")
    }
}