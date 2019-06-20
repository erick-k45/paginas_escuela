<?php
if (!function_exists("GetSQLValueString")) {
function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
{
  if (PHP_VERSION < 6) {
    $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
  }

  //$theValue = function_exists("mysqli_real_escape_string") ? mysqli_real_escape_string($theValue) : mysqli_escape_string($theValue);

  switch ($theType) {
    case "text":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;    
    case "long":
    case "int":
      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
      break;
    case "double":
      $theValue = ($theValue != "") ? doubleval($theValue) : "NULL";
      break;
    case "date":
      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
      break;
    case "defined":
      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
      break;
  }
  return $theValue;
}
}

function ObtenerNombreUsuario($identificador)
{

	global $database_conex, $conex;
	mysqli_select_db($conex, $database_conex);
	$query_ConsultaFuncion = sprintf("SELECT * FROM usuarios WHERE usuarios.matricula = %s", $identificador);
	$ConsultaFuncion = mysqli_query( $conex, $query_ConsultaFuncion) or die(mysql_error());
	$row_ConsultaFuncion = mysqli_fetch_assoc($ConsultaFuncion);
	$totalRows_ConsultaFuncion = mysqli_num_rows($ConsultaFuncion);
	
	return $row_ConsultaFuncion['nombre']."<br>"
.$row_ConsultaFuncion['matricula']; 
	mysql_free_result($ConsultaFuncion);
}

/*

function ObtenerNombreCategoria($identificador)
{

	global $database_conex, $conex;
	mysqli_select_db($conex, $database_conex);
	$query_ConsultaFuncion = sprintf("SELECT * FROM familias WHERE familias.codfamilia = '$identificador'");
	$ConsultaFuncion = mysqli_query($conex, $query_ConsultaFuncion) or die(mysql_error());
	$row_ConsultaFuncion = mysqli_fetch_assoc($ConsultaFuncion);
	$totalRows_ConsultaFuncion = mysqli_num_rows($ConsultaFuncion);
	
	return $row_ConsultaFuncion['descripcion'];
	mysqli_free_result($ConsultaFuncion);
}
*/

//***************************************************

function ObtenerEstado($id)

{
	if($id == 0) echo "Inactivo";
	if($id == 1) echo "Activo";
}
function ObtenerNivel($id)

{
	if($id == 1) echo "Administrador";
	if($id == 2) echo "Empleado";
	if($id == 3) echo "Espectador";
}
?>