<html>
  <head></head>
  <body>
<?php include("header.html"); ?>

<script type="text/javascript" src="http://10.34.28.247/profin/LN/ger/js/propre.js"></script>


   

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
<a href="http://10.34.28.247/profin/LN/ger/con_pre.php"><img src="icon/consulta.png" width:"25%" height="25%"></a>



</center>


        </div>
        <br>
        <center><h1>Prestamo</h1></center>
<br>

<form method="post" id="form1" action="http://10.34.28.247/profin/LN/ger/bpre.php" enctype="">
<table id="fm">
    <tr valign="baseline">
                        <td width="25%" ><strong>Identificador:</strong></td>
                       <td> <input type="text" id="idepre" class="form-control" name="idepre" /></td>
                       <td> <input type="submit" class="button" id="button" value="Buscar"></td>
                        </tr>
  <tr valign="baseline">
                        <td width="25%" ><strong>Cantidad:</strong></td>
                       <td> <input type="text" id="canpre" class="form-control" name="canpre"/></td>
                        </tr>
        
     <tr valign="baseline">      
                        <td width="25%" ><strong>Fecha de aprovación:</strong></td>
                       <td> <input type="text" id="fappre" class="form-control" name="fappre"/></td>
                        </tr>
       <tr valign="baseline">         
                        <td width="25%" ><strong>Fecha de Corte:</strong></td>
                       <td> <input type="text" id="fecpre" class="form-control" name="fecpre"/></td>
                        </tr>
         <tr valign="baseline">          
                        <td width="25%" ><strong>Identificador solicitud:</strong></td>
                       <td> <input type="text" id="idesuc" class="form-control" name="idesuc"/></td>
                        </tr>
   </table>    
      </form>
    
  





    </div> 
  
  </body>
</html>




