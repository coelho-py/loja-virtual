<?php
// coneccao do banco de dados no php
$user = "root";
$password = "";
$dbName = "loja";
$host = "localhost";

try {
  // metodo de conexao do banco de dados em php
  $pdo = new PDO("mysql:host=$host; dbName=$dbName, $usuario, $senha");

} catch (PDOException $err) {

   echo $err->getMessage();

}
?>