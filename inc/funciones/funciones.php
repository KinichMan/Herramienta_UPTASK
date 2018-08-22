<?php
//Se obtiene el archivo local, Server acede a los archvos, [archivo actual]
function obtenerPaginaActual(){
     $archivo =  basename($_SERVER[PHP_SELF]);
     $pagina = str_replace(".php", "", $archivo);
     return $pagina;
 }



 ?>