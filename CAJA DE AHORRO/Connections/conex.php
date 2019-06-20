<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_conex = "localhost";
$database_conex = "prueba";
$username_conex = "root";
$password_conex = "";
$conex = mysqli_connect($hostname_conex, $username_conex, $password_conex) or trigger_error(mysql_error(),E_USER_ERROR); 
?>
<?php
if (is_file("includes/funciones.php")){
	include("includes/funciones.php");
}
else
{
	include("../includes/funciones.php");
	}
?>

