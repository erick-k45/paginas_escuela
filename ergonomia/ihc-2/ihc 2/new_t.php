
<?php

$pp1 = $_POST["p1"];
$pp2 = $_POST["p2"];
$pp3 = $_POST["p3"];
$pp4 = $_POST["p4"];
$pp5 = $_POST["p5"];
$pp6 = $_POST["p6"];
$pp7 = $_POST["p7"];
$pp8 = $_POST["p8"];
$pp9 = $_POST["p9"];
$pp10 = $_POST["p10"];
$pp11 = $_POST["p11"];
$pp12 = $_POST["p12"];
$pp19 = $_POST["p19"];

$r1=$pp1+$pp2+$pp3+$pp4+$pp5+$pp6+$pp7+$pp8+$pp9+$pp10+$pp11+$pp12+$pp19;


?>







<!DOCTYPE html>
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="es"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js js" lang="es"><!--<![endif]--><head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Salud e inform&aacute;tica</title>
    
    

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
     <meta name="viewport" content="width=device-width, initial-scale=1">
    
       
    <style type="text/css" media="all">
@import url("css/main.css");
@import url("css/style.css");
</style>


<script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/validar-test.js"></script>


<style>
  .carousel-inner > .item > img,
  .carousel-inner > .item > a > img {
      width: 300px;
      margin: 5px;
  }
  </style>
                    

<link rel="stylesheet" href="css/bootstrap.min.css">

  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="js/jquery.validate.min.js"></script>
<script type="text/javascript" src="js/validar-test.js"></script>

</head>

  <body class="html front not-logged-in no-sidebars page-node page-node- page-node-1 node-type-seccion">
    
<?php include('header.php'); ?>

<!-- //// MAIN \\\\ -->
<main style="padding-top: 0px;" class="grid">



  

    <!-- //// CONTENT \\\\ -->
<div class="cell-860">
      

    
<h1>Test de nomophobia</h1>
<h2>Resultados</h2>
<h3>
<?php if ($r1<0){ ?> 
<img border="0" src="image/r1.jpg" width="500" height="350"><br>
<?php
echo 'No padeces de nomophobia, pareces una persona normal que tiene sus intereses fuera de el mundo de la telefonia movil';
}
if ($r1<39 && $r1>0){?>
<img border="0" src="image/r2.jpg" width="500" height="350"><br>
<?php
echo 'Tienes una nomophobia leve, estas bien, te recomendamos seguir de esa manera';
}
if ($r1<65 && $r1>39){?>
<img border="0" src="image/r3.jpg" width="500" height="350"><br>
<?php
echo 'Tienes una nomophobia moderada, te aconsejamos alejarte de vez en cuando del celular, para hecer otras actividades';
}
if ($r1>65 ){?>
<img border="0" src="image/r4.jpg" width="500" height="350"><br>
<?php
echo 'Tienes una nomophobia severa, tu caso es grave, intenta buscar ayuda para alejar esa adiccion que tienes hacia el movil';
}
     ?> 
    </h3>



        <br> 
        <br>
        <br> 
 
  

  </div>
                <!-- //// ASIDE \\\\ -->
  <aside class="cell-320">
                                            

  <section class="block-comparador" style="margin-bottom: 30px;">
            <section class="nav-header">
                <div>
                    <div class="nav-text">
                        <p>&nbsp;P&aacute;ginas relacionadas &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div class="nav-text-2">
                        <p><a href="https://www.nlm.nih.gov/medlineplus/spanish/ergonomics.html">MEDLINE PLUS</a><br>

                        <a href="http://saludocupacionalergonomiaudea.blogspot.mx/p/normal-0-21-false-false-false-es-co-x.html">  SALUD Y ERGONOM&Iacute;A</a><br></p>
                    </div>
                </div>
            </section>
</section>
              
                    </aside>
                                <!-- //// FIN ASIDE \\\\ -->
            
        <!-- //// col-full-1-fin \\\\ -->    <!-- //// FIN CONTENT \\\\ -->
        
    
   
</main>
<!-- //// FIN MAIN \\\\ -->
<!-- //// FOOTER \\\\ -->
<?php include('pie.php'); ?>



</body></html>




   
