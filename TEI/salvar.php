<?php
include("conexao.php");

$nome = $_POST["nome"];
$endereco = $_POST["endereco"];
$telefone = $_POST["telefone"];

//insert into contatos (nome, endereco, telefone)
//values ('$nome' , '$endereco' , '$telefone');

$sql = "insert into contatos (nome, endereco, telefone)
values ('$nome' , '$endereco' , '$telefone')";

if(mysqli_query ($conexao, $sql)){
    echo "Contato salvo";
}else{
    echo "Erro ao salvar contato" . mysqli_error($conexao);
}

?>