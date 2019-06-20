<?php

$nom=$_REQUEST['nom'];
$tel=$_REQUEST['tel'];

include("../conect/conex.php");

$query_producto = sprintf("SELECT * FROM usuarios WHERE usuarios.id='$tel'");
$producto = mysqli_query($conex, $query_producto) or die(mysqli_error($conex));
$totalRows_producto = mysqli_num_rows($producto);
if($totalRows_producto>0){

}else{

$insertSQL = sprintf("INSERT INTO usuarios  VALUES ('$tel','$nom')");
$Result1=mysqli_query($conex, $insertSQL) or die (mysqli_error());
}

?>