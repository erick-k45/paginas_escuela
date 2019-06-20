<?php
//$id=$_REQUEST['id'];
//$nom=$_REQUEST['nom'];

$prov=$_GET['prov'];
$longi=$_GET['long'];
$lat=$_GET['lat'];
$dir=$_GET['dir'];
$tele=$_GET['tel'];
include("../conect/conex.php");


$insertSQL = sprintf("INSERT INTO ubicacion (provedor,longitud,latitud,direccion,id_usu) VALUES ('$prov','$longi','$lat','$dir','$tele')");
$Result1=mysqli_query($conex, $insertSQL) or die (mysqli_error());

?>