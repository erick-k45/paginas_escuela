<?php require_once('../Connections/conex.php'); ?>
<?php

mysqli_select_db($conex, $database_conex);
//if($_POST("formid")==1){

$id1 = $_POST["id"];
$ape_pat1 = $_POST["ape_pat"];
$ape_mat1 = $_POST["ape_mat"];
$nombre1 = $_POST["nombre"];


$consulta= sprintf("SELECT id FROM empleado where empleado.id='$id1'");
$c1=mysqli_query($conex, $consulta) or die (mysqli_error());

if (mysqli_num_rows($c1)==0){
$insertSQL = sprintf("INSERT INTO empleado (id,ape_pat,ape_mat,nombre) VALUES ( '$id1', '$ape_pat1','$ape_mat1', '$nombre1')");
$Result1=mysqli_query($conex, $insertSQL) or die (mysqli_error());
}else{
  
}

//$insertSQL2 = sprintf("INSERT INTO dirclientes (codcliente,ciudad,codpostal,direccion) VALUES ($c1,'$ciudad1', '$postcode1', '$direccion1')");
//$Result2=mysqli_query($conex, $insertSQL2) or die (mysqli_error());
echo "1";
//}






?>