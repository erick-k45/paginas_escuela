<html>
  <head></head>
  <body>


<?php include("header.html");
session_start(); ?>



    <div id="PRO"> 

       
        <div id="SUBMEN" >
          
 <center>

<a href="http://10.34.28.247/profin/LN/emp/con_sol.php"><img src='icon/consulta.png' width:"25%" height="25%"></a>
</center>



        </div>
        <br>
        <center><h1>Nueva solicitud</h1></center>

                  
      <form method="post" id="form1"  action="http://10.34.28.247/profin/LN/emp/alt_sol.php" name="formregistro">
            <table id="fm">
              <tr valign="baseline">
              <td><h3 >Datos de la solicitud</h3></td>
</tr>
                   <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Ide. Solicitud:</label>
                        <input type="text" id="idesol" class="form-control" name="idesol" /></td>
                           
                        </tr>
                         <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Monto:</label>
                        <input type="text" id="monsol" class="form-control" name="monsol" /></td>
                        
                       <td> <label class="text-base" for="num">Ide.Cliente:</label>
                        <input type="text" id="solcli" class="form-control" name="solcli" /></td>
             
                      
              </tr>
                        <tr valign="baseline">
              <td><h3 >Datos del Aval</h3></td>
</tr>
                    <tr valign="baseline">
                       <td><label class="text-base" for="num">Apellido paterno:</label>
                       <input type="text" id="apasol" class="form-control" name="apasol" /></td>

                      <td>  <label class="text-base" for="LastName">Apellido Materno:</label>
                        <input type="text" id="amasol" class="form-control" name="amasol"/></td>

                       <td><label class="text-base" for="LastName">Nombre:</label>
                        <input type="text" id="noasol" class="form-control" name="noasol"/></td>
          </tr>
                    <tr valign="baseline">
                      <td>  <label class="text-base" for="LastName">Calle:</label>
                        <input type="text" id="calsol" class="form-control" name="calsol"/></td>
                 
                      <td>  <label class="text-base" for="LastName">Numero:</label>
                        <input type="text" id="numsol" class="form-control" name="numsol"/></td>
           
                       <td> <label class="text-base" for="LastName">Colonia:</label>
                        <input type="text" id="colsol" class="form-control" name="colsol"/></td>
              </tr>
        
                    <tr valign="baseline">
                       <td> <label class="text-base" for="num">Codigo Postal:</label>
                        <input type="text" id="copsol" class="form-control" name="copsol" /></td>
             
                        <td><label class="text-base" for="num">Telefono:</label>
                         <input type="text" id="telsol" class="form-control" name="telsol" /></td>
          
                       <td> <label class="text-base" for="num">e-mail:</label>
                        <input type="text" id="emasol" class="form-control" name="emasol" /></td>

                         <td>
                         <input type="hidden" id="solemp" class="form-control" name="solemp" value=<?php //echo $_SESSION['ide'];?> />
                        <input type="hidden" id="solsuc" class="form-control" name="solsuc"  value=<?php //echo $_SESSION['suc']; ?>/></td>
              </tr>
              <tr valign="baseline">
              <td> <input type="submit" class="button" value="Procesar" name="enviar" id="enviar"></td>
</tr>
                   
    
     </table>
      </form>
    
  







    </div> 
  
  </body>
</html>











