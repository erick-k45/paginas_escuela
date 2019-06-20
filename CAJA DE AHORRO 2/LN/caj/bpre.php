<html>
  <head></head>
  <body>



    
    <?php include("menu.php"); ?>
    <script type="text/javascript" src="../js/propre.js"></script>

    <div id="PRO"> 

       
        <div  id="SUBMEN">
 <center>
<a href="javascript:history.back(-1);"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/regresar.png'?> width:"15%" height="15%"></a>
</center>


        </div>
        <br>
        <center><h1>Prestamo</h1></center>

        <?php



$idepre=$_POST['idesol'];

$query_producto = sprintf("SELECT * FROM PRE,SOL,CLI WHERE PRESOL='$idepre' AND PRESOL=IDESOL AND IDECLI=SOLCLI ");
$producto = mysqli_query($conex, $query_producto) or die(mysqli_error($conex));
$row_producto = mysqli_fetch_assoc($producto);
$totalRows_producto = mysqli_num_rows($producto);

   if ($totalRows_producto == 0) { ?>

<br>
<h2 align="center">No existe registro con esa clave </h2>
 
 <?php  }  


?>


<form method="post" id="form1" name="form1" action="bpre.php" enctype="">
  <table id="fm" >
    <tr valign="baseline">
      <td width="25%" ><strong>Identificador solicitud:</strong></td>
      <td><input type="text" name="idesol" value="<?php echo htmlentities($row_producto['PRESOL'], ENT_COMPAT, 'utf-8'); ?>" size="32"></td>
      <td> <input type="submit" class="button" id="button" value="Buscar"></td>
    </tr>

    <tr valign="baseline">
      <td width="25%" ><strong>Identificador:</strong></td>
      <td><input type="text" name="idepre" value="<?php echo htmlentities($row_producto['IDEPRE'], ENT_COMPAT, 'utf-8'); ?>" size="32"></td>
       
    </tr>
    <tr valign="baseline">
      <td width="25%" ><strong>Cantidad:</strong></td>
      <td><input type="text" name="canpre" value="<?php echo htmlentities($row_producto['CANPRE'], ENT_COMPAT, 'utf-8'); ?>" size="32"></td>
    </tr>
     <tr valign="baseline">
      <td width="25%" ><strong>Fecha de aprovación:</strong></td>
      <td><input type="text" name="fappre" value="<?php echo htmlentities($row_producto['FAPPRE'], ENT_COMPAT, 'utf-8'); ?>" size="32"></td>
    </tr>
     <tr valign="baseline">
      <td width="25%" ><strong>Fecha de Corte:</strong></td>
      <td><input type="text" name="fecpre" value="<?php echo htmlentities($row_producto['FECPRE'], ENT_COMPAT, 'utf-8'); ?>" size="32"></td>
    </tr>
        <tr valign="baseline">
      <td width="25%" ><strong>Nombre del aval:</strong></td>
      <td><input type="text" name="idesuc" value="<?php echo htmlentities($row_producto['NOASOL'].' '.$row_producto['APASOL'].' '.$row_producto['AMASOL'], ENT_COMPAT, 'utf-8'); ?>" size="32"></td>
    </tr>
   
  </table>
</form>


    </div> 
  
  </body>
</html>







