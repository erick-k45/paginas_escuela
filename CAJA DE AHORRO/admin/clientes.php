<html lang="es-ES">
 <head><title>Sucursal</title>
 	</head>
 	<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/s1.css">
<link rel="stylesheet" type="text/css" href="../css/ingresar.css">
 	<script type="text/javascript" src="../js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="../js/jquery.validate.min.js"></script>
<script type="text/javascript" src="../js/validar-cli.js"></script>


<div id="general">
	<div id="titulo">
<center><h1>Clientes</h1>
 	</center></div>
 	<div id="menu">
 		
    <?php include("menu.html"); ?>

 	</div>

 	<div id="contenido">



 		<h2 >Insertar nuevo cliente</h2>
<div id="altausuario">
      <form method="post" id="formregistro"  action="" name="formregistro">
        
        	          <!--Identificador-->
                
                    <div class="form-group col-xs-4">
                        <label class="text-base" for="num">Identificador:</label>
                        <input type="text" id="id" class="form-control" name="id" />
                    
      <h3 >Nombre del cliente</h3>
                      <!--Nombre-->
            <div class="row"> 
              <div class="col-xs-3">
                        <label class="text-base" for="num">Apellido paterno:</label>
                        <input type="text" id="ape_pat" class="form-control" name="ape_pat" />
                  </div>
                  <div class=" col-xs-3">
                        <label class="text-base" for="LastName">Apellido Materno:</label>
                        <input type="text" id="ape_mat" class="form-control" name="ape_mat"/>
                 </div>
                 <div class=" col-xs-3">
                        <label class="text-base" for="LastName">Nombre:</label>
                        <input type="text" id="nombre" class="form-control" name="nombre"/>
          </div></div> 
<br>
          <h3 >Dirección</h3>
            <div class="row"> 
              <div class=" col-xs-3">
                        <label class="text-base" for="LastName">Calle:</label>
                        <input type="text" id="calle" class="form-control" name="calle"/>
                  </div>
                   <div class=" col-xs-3">
                        <label class="text-base" for="LastName">Numero:</label>
                        <input type="text" id="num" class="form-control" name="num"/>
                   </div>
                   <div class=" col-xs-3">
                        <label class="text-base" for="LastName">Colonia:</label>
                        <input type="text" id="col" class="form-control" name="col"/>
                </div></div> 
                  
                        <label class="text-base" for="num">Codigo Postal:</label>
                        <input type="text" id="cp" class="form-control" name="cp" />
               
              <h3 >Contacto</h3>   
             <div class="row">
              <div class=" col-xs-3">
                        <label class="text-base" for="num">Telefono:</label>
                        <input type="text" id="tel" class="form-control" name="tel" />
                   </div>
                   <div class=" col-xs-3">
                        <label class="text-base" for="num">e-mail:</label>
                        <input type="text" id="email" class="form-control" name="email" />
                  </div>
                  </div>
                   </div>
         
                <!--Sucursal-->
                   
                       <div class="col-sm-24">
                        <label class="text-base label-margin" for="carr">Sucursal:</label>
                    </div>
                    <div class="col-sm-6 form-group" >
                        <select id="sucursal" name="sucursal" class="datepart1 form-control">
                            <option selected="selected" value="">--elegir--</option>
                            <?php 
require_once('../Connections/conex.php');
$query_sucu = "SELECT * FROM sucursal";
$sucu = mysqli_query($conex, $query_sucu) or die(mysqli_error());
$row_sucu = mysqli_fetch_assoc($sucu);
$totalRows_sucu = mysqli_num_rows($sucu);
if ($totalRows_sucu == 0) {?>
                             <option value="">No hay sucursales disponibles</option>
<?php }
 if ($totalRows_sucu > 0) {
do { 
  ?>
<option value="<?php echo utf8_encode($row_sucu['id']); ?>"><?php echo utf8_encode($row_sucu['nombre']); ?></option>
<?php } while ($row_sucu = mysqli_fetch_assoc($sucu)); }?>
                          </select>
                    </div>
                    
        




        </div>
        <div class="buttons">
            <input type="submit" class="button" value="Enviar" name="enviar" id="enviar">
          </div>
       
      </form>
    
  




      <div id="ok"> <h2>Se ha registrado correctamente</h2>

 <script type="text/javascript">
        function enviar(pagina){
document.irpagina.action = pagina;
document.irpagina.submit();
}
</script>

      </div>







 	</div>
</div>


</html>
