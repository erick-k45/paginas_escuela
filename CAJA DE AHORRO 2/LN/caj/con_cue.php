<html>
  <head></head>
  <body>

  	 <?php include("menu.php"); ?>

    <div id="PRO"> 

       
        <div  id="SUBMEN">
          
 <center>
          
<br>

<a href="javascript:history.back(-1);"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/regresar.png'?> width:"15%" height="15%"></a>



</center>


        </div>
        <br>
        <center><h1>Cuenta</h1></center>
<br>


		
	<table id="con">
	    <tr>
	      <td align="center" valign="middle" ><strong>Identificador</strong></td>
	      <td align="center" valign="middle"><strong>Tipo de Cuenta</strong></td>
	      <td align="center" valign="middle"><strong>Fecha de Apertura</strong></td>
	      <td align="center" valign="middle"><strong>Plazo de inversion</strong></td>
	      <td align="center" valign="middle"><strong>Fecha de Corte</strong></td>
	      <td align="center" valign="middle"><strong>Monto</strong></td>
	      <td align="center" valign="middle"><strong>Login</strong></td>
	      <td align="center" valign="middle"><strong>Password</strong></td>

	    </tr>

	    <?php

	    	$result = mysqli_query($conex,"SELECT * FROM CUE  ")or die(mysqli_error($conex));
	    	$row = mysqli_fetch_assoc($result);
            $totalRows = mysqli_num_rows($result);

	    	do{?>
	    		<tr>
	    			<td><?php echo $row["IDECUE"];?></td>
	    			<td><?php echo $row["FEPCUE"];?></td>
	    			<td><?php echo $row["PLICUE"];?></td>
	    			<td><?php echo $row["FECCUE"];?></td>
	    			<td><?php echo $row["MONCUE"];?></td>
	    			<td><?php echo $row["LOGCUE"];?></td>
	    			<td><?php echo $row["PASCUE"];?></td>
	    			<td><?php echo $row["EMPCUE"];?></td>
	    			<td><?php echo $row["SUCCUE"];?></td>
	    			<td><?php echo $row["TCUCUE"];?></td>
	    			<td><?php echo $row["CLICUE"];?></td>
	    			
	    		</tr>
	    <?php
	    	} while ($row = mysqli_fetch_assoc($result));
	    ?>
	</table>

    </div> 
  
  </body>
</html>








