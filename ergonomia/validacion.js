function validacion()
{
	var user = document.form.user.value
	var pass = document.form.pass.value 

	if (user == "jesus" && pass == "123456") 
	{
		window.open("file:///C:/Users/Mac/Desktop/Pagina%20ihc/Inicio.htm");
	}

	else
	{
		alert("Ususario y/o contraseña son incorretos")
		usuario="";
		contraseña="";
	}
}
		