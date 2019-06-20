<?php include("../conect/conex.php"); ?>
 
		<link rel="stylesheet" type="text/css" href=<?php echo 'http://'.$sa.'/profin/css/s1.css' ?>>
	<div id="TIT" >
			<img src=<?php echo 'http://'.$sa.'/profin/ima/logo.jpg' ?> width="200px" height="100%" align="right"/>
	
			<br>
			<h1>CAJA DE AHORRO E INVERSION </h1>

			<?php session_start(); ?>
		    
		    <br>
			<h1>Bienvenido Cajero <?php echo $_SESSION['nom']; ?> </h1>
			<br>
			 
             <?php
			 $suc=$_SESSION['suc'];
		     $LoginRS__query=sprintf("SELECT nomsuc FROM SUC WHERE SUC.IDESUC='$suc' "); 
             $LoginRS = mysqli_query($conex, $LoginRS__query) or die(mysqli_error($conex));
            $nombreusuario = mysqli_fetch_assoc($LoginRS);?>

            <h1>Sucursal <?php echo $nombreusuario["nomsuc"];?> </h1>

      </div>

	