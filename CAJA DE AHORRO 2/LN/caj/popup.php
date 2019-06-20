<link rel="stylesheet" type="text/css" href=<?php echo 'http://10.34.28.233/profin/css/s1.css' ?>>
<script>
function datos(ide,nom){
    opener.document.neo.ide.value = ide;
    opener.document.neo.nom.value = nom;
    window.close();
}


function Resaltar_On(GridView)
{
    if(GridView != null)
    {
    GridView.originalBgColor = GridView.style.backgroundColor;
    GridView.style.backgroundColor='#DBE7F6';
    GridView.style.cursor = 'hand';
    }
}

function Resaltar_Off(GridView)
{
    if(GridView != null)
    {
    GridView.style.backgroundColor = GridView.originalBgColor;   
    }
}
function Close() {   
    window.close();
}

//]]>
</script>

<?php
if(isset($_GET["enviar"])){
    if($_GET["seleccion"]==2){
        $valor="selected";
        $qq='IDECLI';
    }else
        $qq="NOMCLI";
}
?>
<strong>Buscar Cliente</strong>
<form id="form2" name="form2" method="get" action="?">
  <label for="seleccion"></label>
  <select name="seleccion" id="seleccion">
    <option value="1">Por Nombre</option>
    <option value="2" select="<?php echo $valor; ?>">Por Ide</option>
  </select>
  <label for="q"></label>
  <input type="text" name="q" id="q" />
  <input type="submit" name="enviar" id="enviar" value="Buscar" />
</form>
<FORM onkeypress="javascript:return WebForm_FireDefaultButton(event, &#39;ctl00_ContentPlaceMain_btnBuscar&#39;)">

<table   border="1" cellspacing="0" cellpadding="0">
  <tr bgcolor="#AEE4FF">
    <td  width="37">Identificador</td>
    <td  width="66"> Nombre </td>
  </tr>

<?php
    if(isset($_GET['q'])){
    $i=0;
  require "../conect/conex.php";
        // Connect to the database and checks if the user / password
        // combinaison matches any existing database entry
        $query = "SELECT * FROM CLI WHERE ".$qq." LIKE '%".$_GET['q']."%' ";
        //echo $query;
        // $r_query = mysql_query($query, $mysql_link);// or mysql_error() and die("Failed to execute_query");
        $r_query = mysqlI_query($conex,$query) or die("Failed to execute_query");
       
        while ($row = mysqli_fetch_array($r_query)) {
            $i++;
            $id=$row{'IDECLI'};
            $id=str_replace(" ", "&nbsp;", $id);
            
            $nom=$row{'NOMCLI'}."&nbsp;".$row{'APPCLI'}."&nbsp;".$row{'APMCLI'};
            $nom=str_replace(" ", "&nbsp;", $nom);
            echo "<tr OnMouseOver='Resaltar_On(this);' OnMouseOut='Resaltar_Off(this);' OnClick=datos('$id','$nom')><td>$id</td><td>$nom</td></tr>";
      }
    }
?>
</table>
</FORM>
