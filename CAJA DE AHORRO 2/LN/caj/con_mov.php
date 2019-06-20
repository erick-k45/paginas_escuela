<html>
  <head></head>
  <body>


<script type="text/javascript">
var mipopup;


function popup()
{
  mipopup=window.open('popup.php',"neo","width=700,height=300,menubar=si");
mipopup.focus();
}

</script>


 <?php include("menu.php"); 
$ide=$_SESSION['ide'];
 ?>
 
    <div id="PRO"> 

       
        <div  id="SUBMEN">
          
 <center>
          
<br>

<a href="javascript:history.back(-1);"><img src=<?php echo 'http://'.$sa.'/profin/cli/icon/regresar.png'?> width:"15%" height="15%"></a>



</center>


        </div>
        <br>
        <center><h1>Consulta Pagos</h1></center>
<br>

<h2>Selecciona cliente </h2>
<br>
<form id="neo" name="neo" method="post" action='con_mov.php'>
<table width="50px"  align="center">
<tr>
<input  type="button" name="enviar" id="enviar" value="Elegir" onClick="popup()" /> 
<td><input type="text" name="ide" id="ide" width='100%' /> </TD>
 <TD> <input type="text" name="nom" disabled="disabled" id="nom" /></TD>
 </tr>
 <tr>
<TD> <input type="submit" class="button" id="button" value="Aceptar"></TD> 
</td>
</tr>
</table>
</form>
		
<?php 

if(isset($_POST['ide'])){ 
$idec=$_POST['ide'];

$suc=$_SESSION['suc'];
	    	$result = mysqli_query($conex,"SELECT IDEMOV,CAPMOV,FEPMOV,CAAMOV,MOVPRE,MOVSOL FROM MOV,PRE,SOL,CLI WHERE MOVPRE=IDEPRE AND MOVSOL=IDESOL AND PRESOL=IDESOL AND SOLSUC='$suc' AND SOLCLI='$idec' AND IDECLI='$idec'")or die(mysqli_error($conex));
	    	$row = mysqli_fetch_assoc($result);
            $totalRows = mysqli_num_rows($result);
            if($totalRows==0){?>
            <br>
            <h2> No hay movimientos para ese cliente</h2>
            <?php }else{ ?>
	<table id="con">
	    <tr>
	      <td align="center" valign="middle" ><strong>Identificador</strong></td>
	      <td align="center" valign="middle"><strong>Cantidad a pagar</strong></td>
	      <td align="center" valign="middle"><strong>Fecha de pago</strong></td>
	      <td align="center" valign="middle"><strong>Cantidad a pagar</strong></td>
	      <td align="center" valign="middle"><strong>Ide.Prestamo</strong></td>
	    </tr>

	    <?php
	    

	    	do{?>
	    		<tr>
	    			<td><?php echo $row["IDEMOV"];?></td>
	    			<td><?php echo $row["CAPMOV"];?></td>
	    			<td><?php echo $row["FEPMOV"];?></td>
	    			<td><?php echo $row["CAAMOV"];?></td>
	    			<td><?php echo $row["MOVPRE"];?></td>
	    			
	    		</tr>
	    <?php
	    	} while ($row = mysqli_fetch_assoc($result));
	    }	
	   } ?>
	</table>







    </div> 
  
  </body>
</html>








