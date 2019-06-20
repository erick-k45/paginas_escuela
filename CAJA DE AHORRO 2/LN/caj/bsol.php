<html>
  <head></head>
  <body>

 
 
 <?php include("menu.php"); ?>

    <div id="PRO"> 
        <div  id="SUBMEN">
 <center>
<a href="javascript:history.back(-1);"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/regresar.png'?> width:"15%" height="15%"></a>
</center>


        </div>
       

        <br>
        <center><h1>Solicitud</h1></center>

        <?php



$idesol=$_POST['idesol'];
$suc=$_SESSION['suc'];
$query_producto = sprintf("SELECT IDESOL,IDECLI,APPCLI,APMCLI,NOMCLI,MONSOL,NOASOL,AMASOL,APASOL FROM SOL,CLI WHERE sol.idesol='$idesol' AND SOLCLI=IDECLI AND SOLSUC=$suc");
$producto = mysqli_query($conex, $query_producto) or die(mysqli_error($conex));
$row_producto = mysqli_fetch_assoc($producto);
$totalRows_producto = mysqli_num_rows($producto);

   if ($totalRows_producto == 0) { ?>

<br>
<h2 align="center">No existe registro con esa clave </h2>
 
 <?php  }  

?>

<form method="post" id="form1" name="form1" action="" >
            <table id="fm">
              <tr valign="baseline">
              <td><h3 >Datos de la solicitud</h3></td>
</tr>
                   <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Ide.Solicitud:</label>
                        <input type="text" id="idesol" class="form-control" name="idesol" value="<?php echo htmlentities($row_producto['IDESOL'], ENT_COMPAT, 'utf-8'); ?>" /></td>
                           
                        </tr>
                         <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Ide.Cliente:</label>
                        <input type="text" id="passcl" class="form-control" name="passcl" value="<?php echo htmlentities($row_producto['IDECLI'], ENT_COMPAT, 'utf-8'); ?>"/></td>

                           <td><label class="text-base" for="num">Nombre cliente:</label>
                        <input type="text" id="appcli" class="form-control" name="appcli" value="<?php echo htmlentities($row_producto['APPCLI'].' '.$row_producto['APMCLI'].' '.$row_producto['NOMCLI'], ENT_COMPAT, 'utf-8'); ?>" /></td>

                        </tr>
                    <tr valign="baseline">
                       

                      <td>  <label class="text-base" for="LastName">Monto:</label><BR>
                       <input type="text" id="apmcli" class="form-control" name="apmcli" value="<?php echo htmlentities($row_producto['MONSOL'], ENT_COMPAT, 'utf-8'); ?>"/></td>
  </tr>
                    <tr valign="baseline">
                       <td><label class="text-base" for="LastName">Nombre Aval:</label>
                        <input type="text" id="nomcli" class="form-control" name="nomcli" value="<?php echo htmlentities($row_producto['NOASOL'].' '.$row_producto['APASOL'].' '.$row_producto['AMASOL'], ENT_COMPAT, 'utf-8'); ?>"/></td>
          </tr>

                  
                   
    
     </table>
      </form>



    </div> 
  
  </body>
</html>







