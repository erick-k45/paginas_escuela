<?php include("conect/conex.php");


if (isset($_POST['ide'])) {
  $loginUsername=$_POST['ide'];
  $password=$_POST['password'];
  $nombreusuario="";

  $MM_redirectLoginSuccess_ger = "http://".$sa."/profin/ger/index.php";
  $MM_redirectLoginSuccess_emp = "http://".$sa."/profin/emp/index.php";
  $MM_redirectLoginSuccess_caj = "http://".$sa."/profin/caj/index.php";
  $MM_redirectLoginSuccess_cli = "http://".$sa."/profin/cli/index.php";
  $MM_redirectLoginFailed = "http://".$sa."/profin/error.html";
  $MM_redirecttoReferrer = false;
  
  $LoginRS__query=sprintf("SELECT * FROM EMP WHERE EMP.IDEEMP='$loginUsername' AND EMP.PASSEM='$password'"); 
   
  $LoginRS = mysqli_query($conex, $LoginRS__query) or die(mysqli_error($conex));


  if($nombreusuario = mysqli_fetch_assoc($LoginRS)){
    session_start();
    
     if (PHP_VERSION >= 5.1) {session_regenerate_id(true);} else {session_regenerate_id();}
    //declare two session variables and assign them
    $_SESSION['ide']=$loginUsername;
    $_SESSION['nom'] = $nombreusuario["NOMEMP"];
    $_SESSION['tip'] = $nombreusuario["TIPEMP"];
    $_SESSION['suc'] =$nombreusuario["EMPSUC"];

if ($_SESSION['tip']=='G'){
  header("Location: " . $MM_redirectLoginSuccess_ger );
}else{
  if ($_SESSION['tip']=='E'){
  header("Location: " . $MM_redirectLoginSuccess_emp );
}else{
  if ($_SESSION['tip']=='C'){
  header("Location: " . $MM_redirectLoginSuccess_caj );}
}

}
     

  }else{

 $Login_vis=sprintf("SELECT * FROM CLI WHERE CLI.IDECLI='$loginUsername' AND CLI.PASSCL='$password'"); 
 $Login_v = mysqli_query($conex, $Login_vis) or die(mysqli_error($conex));
 

 if($nombreusuario = mysqli_fetch_assoc($Login_v)){
    session_start();
    
     header("Location: " . $MM_redirectLoginSuccess_cli);

     if (PHP_VERSION >= 5.1) {session_regenerate_id(true);} else {session_regenerate_id();}
    //declare two session variables and assign them
    $_SESSION['ide']=$loginUsername;
    $_SESSION['nom'] = $nombreusuario["NOMCLI"];
    $_SESSION['suc'] = $nombreusuario["CLISUC"];

  
  }else{

     header("Location: ". $MM_redirectLoginFailed );
   
  }
}

   
}
?>