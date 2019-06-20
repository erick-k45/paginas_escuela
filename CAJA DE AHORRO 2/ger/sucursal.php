<html>
  <head></head>
  <body>

  <?php include("header.html"); ?>
  
<script type="text/javascript" src="http://10.34.28.247/profin/LN/ger/js/procesos.js"></script>


  

    <div id="PRO"> 

       
        <div id="SUBMEN" >
          
 <center>

<a href="javascript:ins()"><img src="icon/nuevo.png" width:"25%" height="25%"></a>
<br>
<a href="javascript:act()"><img src="icon/editar.png" width:"25%" height="25%"></a>
<br>
<a href="javascript:eli()"><img src="icon/eliminar.png" width:"25%" height="25%"></a>
<br>
<a href="javascript:formReset()"><img src='icon/limpiar.png' width:"25%" height="25%"></a>
<br>
<a href="http://10.34.28.247/profin/LN/ger/consulta.php"><img src="icon/consulta.png" width:"25%" height="25%"></a>



</center>


        </div>
        <br>
        <center><h1>Sucursal</h1></center>


<form method="post" id="form1" action="http://10.34.28.247/profin/LN/ger/buscar.php" enctype="">
  <table id="fm">
    <tr valign="baseline">
      <td width="25%" ><strong>Identificador:</strong></td>
      <td><input type="text" name="ide" value="" size="32"></td>
     <td> <input type="submit" class="button" id="button" value="Buscar"></td>
    </tr>
    <tr valign="baseline">
      <td width="25%" ><strong>Nombre:</strong></td>
      <td><input type="text" name="nom" value="" size="32"></td>
    </tr>
     <tr valign="baseline">
      <td width="25%" ><strong>Calle:</strong></td>
      <td><input type="text" name="cal" value="" size="32"></td>
    </tr>
     <tr valign="baseline">
      <td width="25%" ><strong>Numero:</strong></td>
      <td><input type="text" name="num" value="" size="32"></td>
    </tr>
    <tr valign="baseline">
      <td width="25%" ><strong>Codigo Postal:</strong></td>
      <td><input type="text" name="cop" value="" size="32"></td>
    </tr>

  </table>
</form>






    </div> 
  
  </body>
</html>




