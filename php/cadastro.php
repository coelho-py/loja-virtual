<?php
try {
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $nascimento = $_POST['nascimento'];
    $telefone = $_POST['telefone'];
    $email = $_POST['email'];
    $sexo = $_POST['sexo'];
    $senha = $_POST['senha'];


} catch (\Throwable $th) {
    throw $th;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="logs.css" media="screen"/>
    <link rel="stylesheet" type="text/css" href="../../geral.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Loja Virtual</title>
</head>
<body>
    
<main>
    <h1 class="TitleG">BEM VINDO á Yggdrasil E-Commerce<br>Cadastre-se</h1>
    <div id="corpoLogs">

            <h3 class="TitleS">Insira suas Informações para cadastrar na "Yggdrasil"</h3>
            <br>
            <form action="cadastro.php" method="post">
                <table class="cadastro">
                    <tr>
                        <td colspan="2" style="text-align:center;"><strong>Cadastro</strong></td>
                    </tr>
                    <tr>
                        <td>Nome:</td>
                        <td><input id="username" type="text" name="nome" required></td>
                    </tr>
                    <tr>
                        <td>CPF:</td>
                        <td><input id="cpf" type="text" name="cpf" required pattern="\d{11}" title="Digite 11 números"></td>
                    </tr>
                    <tr>
                        <td>Data de Nascimento:</td>
                        <td><input id="birthdate" type="date" name="data_nascimento" required></td>
                    </tr>
                    <tr>
                        <td>Telefone:</td>
                        <td><input id="phone" type="tel" name="telefone" required pattern="\d{10,11}" title="Digite o DDD e o número"></td>
                    </tr>
                    <tr>
                        <td>E-Mail:</td>
                        <td><input id="email" type="email" name="email" required></td>
                    </tr>
                    <tr>
                        <td>Senha:</td>
                        <td><input id="password" type="password" name="senha" required></td>
                    </tr>
                    <tr>
                        <td>Confirme sua Senha:</td>
                        <td><input id="passwordagain" type="password" name="confirma_senha" required></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <input type="submit" value="Cadastrar">
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <a href="login.html"><label id="txtCadastro" for="login">Faça seu login</label></a>
                        </td>
                    </tr>
                </table>
            </form>  
        </div>
    </div>
</main>
    <footer>
        <h1>footer</h1>
    </footer>
</body>
</html>