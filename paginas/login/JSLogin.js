function signUP(){
    var nome = document.getElementById ("loginNOME").value;
    var email = document.getElementById ("loginEMAIL").value;
    var senha = document.getElementById ("loginSENHA").value;
    document.getElementById("txtLogin").innerHTML = "Olá '" + nome + "', seu email é '" + email + "' e sua senha é '" + senha + "'. Seja BEM VINDO á YGGDRASIL!";
}