<?php

$servidor = "localhost";
$usuario = "root";
$senha = " ";
$banco = "agenda";

$conexao = mysqli_connect($servidor, $usuario, $senha, $banco);

if(!$conexao){
    echo "Erro ao conectar!";
}else{
    echo "Conectado com sucesso!";
}

?>