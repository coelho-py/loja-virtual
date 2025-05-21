function signUP(){
    var email = document.getElementById ("loginEMAIL").value;
    var senha = document.getElementById ("loginPASSWORD").value;
    document.getElementById("txtLogin").innerHTML = "Olá, seu email é '" + email + "' e sua senha é '" + senha + "'. Seja BEM VINDO á YGGDRASIL!";
}