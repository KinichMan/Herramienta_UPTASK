<?php 
//                  Encaso de que se suba la apliación a un servidor, se puede reemplazar el localhost con una ip
//                  el usuario y contraseña
    $conn = new mysqli('localhost','root', 'root', 'uptask');
    if ($conn->connect_eror){
        echo $conn->connect_eror;
    }

    $conn->set_charset('utf8');
?>