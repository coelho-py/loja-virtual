function signUP(){
    var nome = document.getElementById ("loginNOME").value;
    var idade = document.getElementById ("loginIDADE").value;
    var cidade = document.getElementById ("loginCIDADE").value;
    document.getElementById("txtLogin").innerHTML = "Olá " + nome + ", com " + idade + " anos da cidade " + cidade + ". Seja BEM VINDO á ADA!";
}