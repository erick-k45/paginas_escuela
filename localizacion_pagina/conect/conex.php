<?php
$database_conex = "u452515962_usu";
$conex = mysqli_connect('mysql.hostinger.mx','u452515962_usu','Sekaide01') or trigger_error(mysql_error(),E_USER_ERROR); 
mysqli_select_db($conex, $database_conex);


?>