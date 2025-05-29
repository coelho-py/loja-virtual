<?php
// coneccao do banco de dados no php
$user = "root";
$password = "";
$dbName = "loja";
$host = "localhost";

try{
  // metodo de conexao do banco de dados em php
  $db = new mysqli($host, $user, $password, $dbName) or die("cant connect");

} catch (PDOException $err) {
   echo $err->getMessage();
}

  $nome = $_POST['nome'];
  $nome = $_POST[''];
  $nome = $_POST[''];
  $nome = $_POST[''];
  $nome = $_POST[''];
  $nome = $_POST[''];
?>