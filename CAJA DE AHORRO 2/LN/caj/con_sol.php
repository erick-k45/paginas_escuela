<html>
  <head></head>
  <body>

  	 <?php include("../conect/conex.php"); 
      include("menu.php"); ?>
 
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link rel="stylesheet" type="text/css" href=<?php echo 'http://'.$sa.'/profin/css/s1.css' ?>>

	

    <div id="PRO"> 

       
        <div  id="SUBMEN">
          
 <center>
<form id="buscar" name="buscar" method="post" action='bsol.php'>
  <p>&nbsp;</p>
   
            <strong>Clave Solicitud:</strong>
             <input type="text" name="idesol" id='idesol' style='width: 50px;'>
            <input type="submit" class="button" id="button" value="Buscar">
</form>
<br>

<a href="javascript:history.back(-1);"><img src=<?php echo 'http://'.$sa.'/profin/caj/icon/regresar.png'?> width:"15%" height="15%"></a>



</center>


        </div>
        <br>
        <center><h1>Solicitudes no aprovadas</h1></center>
<br>


		
	<table id="con" >
	    <tr>
	      <td align="center" valign="middle" ><strong>Ide.Solicitud</strong></td>
	      <td align="center" valign="middle"><strong>Ide.Cliente.</strong></td>
	      <td align="center" valign="middle"><strong>Nombre Cliente</strong></td>
	      <td align="center" valign="middle"><strong>Monto</strong></td>
	      <td align="center" valign="middle"><strong>Nombre Aval</strong></td>
	      <td align="center" valign="middle"><strong>Direccion</strong></td>
	      <td align="center" valign="middle"><strong>C.Postal</strong></td>
	      <td align="center" valign="middle"><strong>Telefono</strong></td>
	      <td align="center" valign="middle"><strong>Email</strong></td>


	    </tr>

	    <?php
	    	$result = mysqli_query($conex,"SELECT * FROM SOL WHERE SOL.ESTSOL='P'")or die(mysqli_error($conex));
	    	$row = mysqli_fetch_assoc($result);
            $totalRows = mysqli_num_rows($result);

	    	do{
	    	$ic=$row['SOLCLI'];
            $result2 = mysqli_query($conex,"SELECT * FROM CLI WHERE CLI.IDECLI='$ic' ")or die(mysqli_error($conex));
	    	$row2 = mysqli_fetch_assoc($result2);
            $totalRows2 = mysqli_num_rows($result2);
	    		?>
	    		<tr>
	    			<td><?php echo $row["IDESOL"];?></td>
	    			<td><?php echo $row["SOLCLI"];?></td>
	    			<td><?php echo $row2["APPCLI"].' '.$row2["APMCLI"].' '.$row2["NOMCLI"];?></td>
	    			<td><?php echo $row["MONSOL"];?></td>
	    			<td><?php echo $row["APASOL"].$row["AMASOL"].$row["NOASOL"];?></td>
	    			<td><?php echo $row["CALSOL"].$row["NUMSOL"].$row["COLSOL"];?></td>
	    			<td><?php echo $row["COPSOL"];?></td>
	    			<td><?php echo $row["TEASOL"];?></td>
	    			<td><?php echo $row["EMASOL"];?></td>

	    		</tr>
	    <?php
	    	} while ($row = mysqli_fetch_assoc($result));
	    ?>
	</table>







    </div> 
  
  </body>
</html>








