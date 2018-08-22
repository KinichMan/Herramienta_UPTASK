<?php
/*
$arreglo = array(
    'respuesta' => 'Desde Modelo formato Json'

);
Convierte el arreglo en Json, se usa para mandar a javascrpt
die(json_encode($arreglo)); */

//Validando los datos enviados desde el formulario.
die(json_encode($_POST));

