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


 <?php include("menu.php"); ?>
 
    <div id="PRO"> 

       
        <div  id="SUBMEN">
          
 <center>
          <form id="buscar" name="buscar" method="post" action='bpre.php'>
  <p>&nbsp;</p>
   
            <strong>Identificador Solicitud:</strong>
             <input type="text" name="idesol" id='idesol' style='width: 50px;'>
            <input type="submit" class="button" id="button" value="Buscar">
</form>
<br>

<a href="javascript:history.back(-1);"><img src=<?php echo 'http://'.$sa.'/profin/caj/icon/regresar.png'?> width:"15%" height="15%"></a>



</center>


        </div>
        <br>
        <center><h1>Consulta Prestamos</h1></center>
<br>
<h2>Selecciona cliente </h2>
<br>
<form id="neo" name="neo" method="post" action='con_pre.php'>
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
$ide=$_SESSION['ide'];
$idec=$_POST['ide'];


$suc=$_SESSION['suc'];
	    	$result = mysqli_query($conex,"SELECT * FROM PRE,SOL WHERE SOLCLI='$idec' AND PRESOL=IDESOL ")or die(mysqli_error($conex));
	    	$row = mysqli_fetch_assoc($result);
            $totalRows = mysqli_num_rows($result);
            if($totalRows==0){?>
            <br>
            <h2> El cliente seleccionado no tiene prestamos</h2>
            <?php }else{ ?>

		

	<table id="con">
	    <tr>
	    	<td align="center" valign="middle"><strong>Ide.Solicitud</strong></td>
	      <td align="center" valign="middle" ><strong>Ide.Prestamor</strong></td>
	      <td align="center" valign="middle"><strong>Cantidad</strong></td>
	      <td align="center" valign="middle"><strong>Fecha de Aprovación</strong></td>
	      <td align="center" valign="middle"><strong>Fecha de corte</strong></td>
	      
	    </tr>

	    <?php
	    	

	    	do{?>
	    		<tr>
	    			<td><?php echo $row["PRESOL"];?></td>
	    			<td><?php echo $row["IDEPRE"];?></td>
	    			<td><?php echo $row["CANPRE"];?></td>
	    			<td><?php echo $row["FAPPRE"];?></td>
	    			<td><?php echo $row["FECPRE"];?></td>
	    			
	    		</tr>
	    <?php
	    	} while ($row = mysqli_fetch_assoc($result));
	    }}?>
	</table>







    </div> 
  
  </body>
</html>








