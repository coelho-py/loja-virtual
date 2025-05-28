<?php
// coneccao do banco de dados no php
$user = "root";
$password = "";
$dbName = "loja";
$host = "localhost";

$db = new mysqli($host, $user, $password, $dbName) or die("cant connect");

/*try{
  // metodo de conexao do banco de dados em php
  $pdo = new PDO("mysql:host=$host; dbName=$dbName, $user, $password");

} catch (PDOException $err) {

   echo $err->getMessage();
}
?>*/