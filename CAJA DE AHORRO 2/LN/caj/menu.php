<?php include("../conect/conex.php"); 
 session_start();
 $suc=$_SESSION['suc'];
 ?>



    
   
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">


<link rel="stylesheet" type="text/css" href=<?php echo 'http://'.$sa.'/profin/css/s1.css' ?>>

 
      <iframe src=<?php echo 'http://'.$ln.'/profin/LN/caj/tit.php'?> width="100%" height="21%"> </iframe>


    <div id="MEN"  >
       <div id="header" >
      <ul class="nav" >
        <li><a href=<?php echo 'http://'.$sa.'/profin/caj/index.php'?> >Inicio</a></li>
        <li><a href="">Consultas</a>
          <ul>
            <li><a href=<?php echo 'http://'.$ln.'/profin/LN/caj/con_mov.php'?>>Consultar movimientos</a></li>
            <li><a href=<?php echo 'http://'.$ln.'/profin/LN/caj/con_pre.php'?>>Consultar prestamos</a></li>
            <li><a href=<?php echo 'http://'.$ln.'/profin/LN/caj/con_sol.php'?>>Consultar solicitudes</a></li>
          </ul>
        <ul>
        
            
          
          
            </li>
          </ul>
        </li>
         <li><a href="">Servicios</a>
          <ul>
            <li><a href=<?php echo 'http://'.$ln.'/profin/LN/caj/pago.php'?>>Realizar pago</a></li>
        </ul></li>
          

        <li><a href="">Cuentas</a>
         
        </li>
      <li><a href=<?php echo 'http://'.$ln.'/profin/LN/logout.php'?> >Salir</a></li>
      </ul>
    </div>
    </div>