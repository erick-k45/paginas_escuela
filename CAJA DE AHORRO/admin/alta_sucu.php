<?php require_once('../Connections/conex.php'); ?>
<?php

mysqli_select_db($conex, $database_conex);
//if($_POST("formid")==1){

$id1 = $_POST["id"];
$nombre1 = $_POST["nombre"];
$calle1 = $_POST["calle"];
$num1 = $_POST["num"];
$cp1= $_POST["cp"];


$consulta= sprintf("SELECT id FROM sucursal where sucursal.id='$id1'");
$c1=mysqli_query($conex, $consulta) or die (mysqli_error());

if (mysqli_num_rows($c1)==0){
$insertSQL = sprintf("INSERT INTO sucursal (id,nombre,calle,num,cp) VALUES ( '$id1', '$nombre1', '$calle1', '$num1','$cp1')");
$Result1=mysqli_query($conex, $insertSQL) or die (mysqli_error());
}else{
  
}

//$insertSQL2 = sprintf("INSERT INTO dirclientes (codcliente,ciudad,codpostal,direccion) VALUES ($c1,'$ciudad1', '$postcode1', '$direccion1')");
//$Result2=mysqli_query($conex, $insertSQL2) or die (mysqli_error());
echo "1";
//}






?>