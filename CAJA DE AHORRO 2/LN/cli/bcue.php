<html>
  <head></head>
  <body>


<script src="../js/proemp.js"></script>


     <?php include("menu.php"); ?>

    <div id="PRO"> 

       
        <div  id="SUBMEN">
 <center>


<a href="javascript:ins()"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/nuevo.png'?> width:"25%" height="25%"></a>
<br>
<a href="javascript:act()"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/editar.png'?> width:"25%" height="25%"></a>
<br>
<a href="javascript:eli()"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/eliminar.png'?> width:"25%" height="25%"></a>
<br>
<a href="con_emp.php"><img src=<?php echo 'http://'.$sa.'/profin/emp/icon/consulta.png'?> width:"25%" height="25%"></a>
</center>


        </div>
        <br>
        <center><h1>CUENTA</h1></center>

        <?php
$idecue=$_POST['idecue'];

$query_producto = sprintf("SELECT * FROM CUE WHERE CUE.IDECUe='$idece'");
$producto = mysqli_query($conex, $query_producto) or die(mysqli_error($conex));
$row_producto = mysqli_fetch_assoc($producto);
$totalRows_producto = mysqli_num_rows($producto);

   if ($totalRows_producto == 0) { ?>

<br>
<h2 align="center">No existe registro con esa clave </h2>
 
 <?php  }  


?>

<br>
 <form method="post" id="form1"  action="http://10.34.28.247/profin/LN/emp/bemp.php" name="formregistro">
        
                 <table id="fm">
                   <tr valign="baseline">
                       <td> <label class="text-base" for="num">Identificador:</label></td>
                        <td><input type="text" id="ideemp" class="form-control" name="ideemp" value="<?php echo htmlentities($row_producto['IDECUE'], ENT_COMPAT, 'utf-8'); ?>"></td>
                        <td> <input type="submit" class="button" id="button" value="Buscar"></td>
   
                  </tr>
                   <tr valign="baseline">
                       <td> <label class="text-base" for="num">Tipo de Cuente:</label></td>
                       <td> <input type="text" id="passem" class="form-control" name="passem" value="<?php echo htmlentities($row_producto['FEPCUE'], ENT_COMPAT, 'utf-8'); ?>"></td>
                    </tr>
                  <tr valign="baseline">
                        <td><label class="text-base label-margin" for="carr">Fecha de Apertura:</label></td>
            
                      <td>  <select id="tipemp" name="tipemp" class="datepart1 form-control">
                            <option selected="selected" value="<?php echo htmlentities($row_producto['PLICUE'], ENT_COMPAT, 'utf-8'); ?>"></td>
            </tr>

                  <tr valign="baseline">
                       <td> <label class="text-base" for="num">Plazo de Inversion:</label></td>
                       <td> <input type="text" id="appemp" class="form-control" name="appemp" value="<?php echo htmlentities($row_producto['FECCUE'], ENT_COMPAT, 'utf-8'); ?>" /></td>
                    </tr>

  <tr valign="baseline">
                        <td><label class="text-base" for="LastName">Fecha de Corte:</label></td>
                       <td> <input type="text" id="apmemp" class="form-control" name="apmemp" value="<?php echo htmlentities($row_producto['FECCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>

                  </tr>
<tr valign="baseline">
                       <td> <label class="text-base" for="LastName">Monto:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['MONCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">Login:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['LOGCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">Password:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['PASCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">Concue:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['CONCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">EmpCUe:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['EMPCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">Succue:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['SUCCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">tcucue:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['TCUCUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>
                  
                  <tr valign="baseline">
                       <td> <label class="text-base" for="LastName">clicue:</label></td>
                       <td> <input type="text" id="nomemp" class="form-control" name="nomemp" value="<?php echo htmlentities($row_producto['CLICUE'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                   
                  </tr>

      </form>
    
   

    </div> 
  
  </body>
</html>







