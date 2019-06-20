<html lang="es-ES">
 <head><title>Sucursal</title>
 	</head>
 	<meta charset="utf-8">
<link rel="stylesheet" type="text/css" href="../css/s1.css">
<link rel="stylesheet" type="text/css" href="../css/ingresar.css">
 	<script type="text/javascript" src="../js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="../js/jquery.validate.min.js"></script>
<script type="text/javascript" src="../js/validar-sucu.js"></script>


<div id="general">
	<div id="titulo">
<center><h1>Sucursal</h1>
 	</center></div>
 	<div id="menu">
 		
    <?php include("menu.html"); ?>

 	</div>
    
 	<div id="contenido">
 		<h2 >Insertar nueva sucursal</h2>

<div id="altausuario">
      <form method="post" id="formregistro"  action="" name="formregistro">
        
        	          <!--Identificador-->
                   
                    <div class="form-group col-xs-4">
                        <label class="text-base" for="num">Identificador:</label>
                        <input type="text" id="id" class="form-control" name="id" />
                   
                   <br>  

                      <!--Nombre-->
                    
                    
                        <label class="text-base" for="num">Nombre:</label>
                        <input type="text" id="nombre" class="form-control" name="nombre" />
                    
                 <br>

                 
                    
                        <label class="text-base" for="LastName">Calle:</label>
                        <input type="text" id="calle" class="form-control" name="calle"/>
                    
               
<br>
                   

                   
                        <label class="text-base" for="LastName">Numero:</label>
                        <input type="text" id="num" class="form-control" name="num"/>
                   
                  
                    
                  <br>

                <!--No.control-->
                
                    
                  
                        <label class="text-base" for="num">Codigo Postal:</label>
                        <input type="text" id="cp" class="form-control" name="cp" />
                        
                    
              
   
        
       <br>
        
        <div class="buttons">
            <input type="submit" class="button" value="Enviar" name="enviar" id="enviar">
          </div>

          
       </div>
      </form>
    
      </div>

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
