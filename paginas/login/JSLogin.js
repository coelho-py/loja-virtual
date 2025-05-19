function signUP(){
    var nome = document.getElementById ("loginNOME").value;
    var email = document.getElementById ("loginEMAIL").value;
    var senha = document.getElementById ("loginSENHA").value;
    document.getElementById("txtLogin").innerHTML = "Olá " + nome + ", com " + email + " anos da cidade " + senha + ". Seja BEM VINDO á ADA!";
}