<html>
  <head></head>
  <body>


<?php include("header.html"); ?>

<script type="text/javascript" src="http://10.34.28.247/profin/LN/ger/js/procli.js"></script>





    <div id="PRO"> 

       
        <div id="SUBMEN" >
          
 <center>


<a href="javascript:ins()"><img src='icon/nuevo.png' width:"25%" height="25%"></a>
<br>
<a href="javascript:act()"><img src='icon/editar.png' width:"25%" height="25%"></a>
<br>
<a href="javascript:eli()"><img src='icon/eliminar.png' width:"25%" height="25%"></a>
<br>
<a href="javascript:formReset()"><img src='icon/limpiar.png' width:"25%" height="25%"></a>
<br>
<a href="http://10.34.28.247/profin/LN/ger/con_cli.php"><img src='icon/consulta.png' width:"25%" height="25%"></a>
</center>



        </div>
        <br>
        <center><h1>Clientes</h1></center>

                  
      <form method="post" id="form1"  action="http://10.34.28.247/profin/LN/ger/bcli.php" enctype="">
            <table id="fm">
              <tr valign="baseline">
              <td><h3 >Datos del cliente</h3></td>
</tr>
                   <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Identificador:</label>
                        <input type="text" id="idecli" class="form-control" name="idecli" /></td>
                           <td> <input type="submit" class="button" value="Buscar" name="enviar" id="enviar"></td>
                        </tr>
                         <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Contraseña:</label>
                        <input type="password" id="passcl" class="form-control" name="passcl" /></td>
                           
                        </tr>
                    <tr valign="baseline">
                       <td><label class="text-base" for="num">Apellido paterno:</label>
                       <input type="text" id="appcli" class="form-control" name="appcli" /></td>

                      <td>  <label class="text-base" for="LastName">Apellido Materno:</label>
                        <input type="text" id="apmcli" class="form-control" name="apmcli"/></td>

                       <td><label class="text-base" for="LastName">Nombre:</label>
                        <input type="text" id="nomcli" class="form-control" name="nomcli"/></td>
          </tr>
                    <tr valign="baseline">
         <td> <h3 >Dirección</h3></td>
         </tr>
                    <tr valign="baseline">
                      <td>  <label class="text-base" for="LastName">Calle:</label>
                        <input type="text" id="calcli" class="form-control" name="calcli"/></td>
                 
                      <td>  <label class="text-base" for="LastName">Numero:</label>
                        <input type="text" id="numcli" class="form-control" name="numcli"/></td>
           
                       <td> <label class="text-base" for="LastName">Colonia:</label>
                        <input type="text" id="colcli" class="form-control" name="colcli"/></td>
              </tr>
        
                    <tr valign="baseline">
                       <td> <label class="text-base" for="num">Codigo Postal:</label>
                        <input type="text" id="copcli" class="form-control" name="copcli" /></td>
             
                        <td><label class="text-base" for="num">Telefono:</label>
                         <input type="text" id="telcli" class="form-control" name="telcli" /></td>
          
                       <td> <label class="text-base" for="num">e-mail:</label>
                        <input type="text" id="emacli" class="form-control" name="emacli" /></td>
              </tr>
                   
    
     </table>
      </form>
    
  


    </div> 
  
  </body>
</html>











