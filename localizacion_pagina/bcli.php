<?php include("conect/conex.php"); ?>
<html>
  <head></head>
  <body>

<link rel="stylesheet" type="text/css" href="css/s1.css">

    <div id="PRO"> 
       <img  src="ima/mono.png" align="left">
       <center>
     
   <div id="BC" >
        <br>
        <center><h1>BIENVENIDO A UBIMOVIL</h1>
        </center>

        <?php

$num=$_POST['num'];

$query_producto = sprintf("SELECT * FROM usuarios WHERE usuarios.id='$num'");
$producto = mysqli_query($conex, $query_producto) or die(mysqli_error($conex));
$row_producto = mysqli_fetch_assoc($producto);
$totalRows_producto = mysqli_num_rows($producto);

   if ($totalRows_producto == 0) { ?>

<br>
<h2 align="center">No existe registro con esa clave </h2>
 
 <?php  }  


?>

<form method="post" id="form1" name="form1" action="bcli.php" >
            <table id="fm">
              <tr valign="baseline">
              <td><h3 >Datos del cliente</h3></td>
</tr>
                   <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Identificador:</label>
                        <input type="text" id="num" class="form-control" name="num" value="<?php echo htmlentities($row_producto['id'], ENT_COMPAT, 'utf-8'); ?>" /></td>
                           <td> <input type="submit" class="button" value="Buscar" name="enviar" id="enviar"></td>
                        </tr>
                         <tr valign="baseline">
                
                       <td> <label class="text-base" for="num">Nombre de usuario</label>
                        <input type="text" id="nom" class="form-control" name="nom" value="<?php echo htmlentities($row_producto['nombre'], ENT_COMPAT, 'utf-8'); ?>"/></td>
                           
                        </tr>
                    
     </table>
      </form>
<?php
$result = mysqli_query($conex,"SELECT * FROM ubicacion WHERE id_usu='$num' ")or die(mysqli_error($conex));
        $row = mysqli_fetch_assoc($result);
            $totalRows = mysqli_num_rows($result);
 if($totalRows==0){?>
            <br>
            <h2> No se han registrado ubicaciones, verifique si la aplicación este activa en su movil</h2>
            <?php }else{ ?>
    
  <table id="con">
      <tr>
        <td align="center" valign="middle" ><strong>Id</strong></td>
        <td align="center" valign="middle"><strong>Provedor</strong></td>
        <td align="center" valign="middle"><strong>Longitud</strong></td>
        <td align="center" valign="middle"><strong>Latitud</strong></td>
        <td align="center" valign="middle"><strong>Direccion</strong></td>
      </tr>

      <?php
       
        do{?>
          <tr>
            <td><?php echo $row["id"];?></td>
            <td><?php echo $row["provedor"];?></td>
            <td><?php echo $row["longitud"];?></td>
            <td><?php echo $row["latitud"];?></td>
            <td><?php echo $row["direccion"];?></td>
            
          </tr>
      <?php
        } while ($row = mysqli_fetch_assoc($result));
      }?>
  </table>


   
  <?php


$query = sprintf("SELECT MAX( id ) AS id,longitud,latitud FROM ubicacion WHERE id_usu='$num'");
$p = mysqli_query($conex, $query) or die(mysqli_error($conex));
$row_p = mysqli_fetch_assoc($p);
$totalRows_producto = mysqli_num_rows($p);
$longitud=$row_p['longitud'];
$latitud=$row_p['latitud'];
 ?>
 <h1>Ultima ubicación</h1>
     
       <img id="m1" src="">
    


 <script type="text/javascript">
 var latitud='<?php echo $latitud;?>';
 var longitud='<?php echo $longitud?>';
  function mostrar(){
var mapurl='http://maps.google.com/maps/api/staticmap?center='+latitud+','+longitud+'&zoom=15&size=600x600&sensor=false&markers='+latitud+','+longitud;
document.getElementById("m1").src =mapurl;
}
mostrar();
  </script>



</div>
</center>

</div>





   
  </body>

  
</html>







