<html>
  <head></head>
  <body>

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
        <center><h1>Movimientos realizados</h1></center>
<br>


		

	<table id="con">
	    <tr>
	      <td align="center" valign="middle" ><strong>Identificador</strong></td>
	      <td align="center" valign="middle"><strong>Cantidad a pagar</strong></td>
	      <td align="center" valign="middle"><strong>Fecha de pago</strong></td>
	      <td align="center" valign="middle"><strong>Cantidad a pagar</strong></td>
	      <td align="center" valign="middle"><strong>Ide.Prestamo</strong></td>
	    </tr>

	    <?php
	    	$result = mysqli_query($conex,"SELECT IDEMOV,CAPMOV,FEPMOV,CAAMOV,MOVPRE,MOVSOL FROM MOV,PRE,SOL,CLI WHERE MOVPRE=IDEPRE AND MOVSOL=IDESOL AND PRESOL=IDESOL AND SOLCLI='$ide' AND IDECLI='$ide'")or die(mysqli_error($conex));
	    	$row = mysqli_fetch_assoc($result);
            $totalRows = mysqli_num_rows($result);

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
	    	
	    ?>
	</table>







    </div> 
  
  </body>
</html>








