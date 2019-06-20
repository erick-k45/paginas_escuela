<html>
  <head></head>
  <body>

   <?php include("header.html"); ?>
   
<script type="text/javascript" src="http://10.34.28.247/profin/LN/ger/js/proemp.js"></script>



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
<a href="http://10.34.28.247/profin/LN/ger/con_emp.php"><img src="icon/consulta.png" width:"25%" height="25%"></a>



</center>


        </div>
        <br>
        <center><h1>Empleados</h1></center>

<br>

<br>
 <form method="post" id="form1"  action="http://10.34.28.247/profin/LN/ger/bemp.php" enctype="">
        
                 <table id="fm">
                   <tr valign="baseline">
                       <td> <label class="text-base" for="num">Identificador:</label></td>
                        <td><input type="text" id="ideemp" class="form-control" name="ideemp" /></td>
                        <td> <input type="submit" class="button" id="button" value="Buscar"></td>
   
                  </tr>
                   <tr valign="baseline">
                       <td> <label class="text-base" for="num">Contraseña:</label></td>
                       <td> <input type="text" id="passem" class="form-control" name="passem" /></td>
                    </tr>
                  <tr valign="baseline">
                        <td><label class="text-base label-margin" for="carr">Tipo de empleado:</label></td>
            
                      <td>  <select id="tipemp" name="tipemp" class="datepart1 form-control">
                            <option selected="selected" value="">--elegir--</option>
                            <option value="G">Gerente</option>
                            <option value="E">Ejecutivo</option>
                            <option value="C">Cajero</option>
                          </select></td>
            </tr>

                  <tr valign="baseline">
                       <td> <label class="text-base" for="num">Apellido paterno:</label></td>
                       <td> <input type="text" id="appemp" class="form-control" name="appemp" /></td>
                    </tr>

  <tr valign="baseline">
                        <td><label class="text-base" for="LastName">Apellido Materno:</label></td>
                       <td> <input type="text" id="apmemp" class="form-control" name="apmemp"/></td>

                  </tr>
<tr valign="baseline">
                       <td> <label class="text-base" for="LastName">Nombre:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp"/></td>
                   
                  </tr>

      </form>
    
   


    </div> 
  
  </body>
</html>













     