$(function(){
	$("#ok").hide();
	

	$("#formregistro").validate({
		
			rules: { 
                    "id": {
                        "required": true
						
                    },

                     "ape_pat": {
                        "required": true
                        
                    },

                     "ape_mat": {
                        "required": true
                        
                    },
                     "nombre": {
                        "required": true
                        
                    },
                     "calle": {
                        "required": true
                        
                    },
                    "num": {
                        "required": true
                    },
                    "col": {
                        "required": true
                    },
                    "cp": {
                        "required": true
                    },
                    "tel": {
                        "required": true
                    },
                    "email": {
                        "required": true
                    },
                    "sucursal": {
                        "required": true
                    }
            
			
			
		},
				messages: { 
                    "id": " Ingrese una id",

                    "ape_pat":{
                    "required": " Ingrese apellido"
                    },

                    "ape_mat":{
                    "required": " Ingrese apellido"
                    },

                    "nombre":{
                    "required": " Ingrese nombre"
                    },

                     "calle":{
                    "required": " Ingrese una calle"
                    },
				
                    "num": {
                        "required": " Ingrese el numero"
                    },
                    "col": {
                        "required": " Ingrese colonia"
                    },

                    "cp": {
                        "required": " Ingrese codigo postal"
                    },

                    "tel": {
                        "required": " Ingrese telefono"
                    },

                    "email": {
                        "required": " Ingrese correo electronico"
                    },
                    "sucursal": {
                        "required": " Elija una sucursal"
                    }
					
					
					
                },
		
		submitHandler: function(form)
		{
			

			$(form).find("#enviar").attr("disabled", "disabled").attr("value","Evaluando...");
            var dataString = 'id='+$('#id').val()+'&ape_pat='+$('#ape_pat').val()+'&ape_mat='+$('#ape_mat').val()+'&nombre='+$('#nombre').val()+'&calle='+$('#calle').val()+'&num='+$('#num').val()+'&col='+$('#col').val()+'&cp='+$('#cp').val()'&tel='+$('#tel').val()+'&email='+$('#email').val()'&sucursal='+$('#sucursal').val()+'&formid=1';
            $.ajax({
                type: "POST",
                url:"alta_cli.php",
                data: dataString,
                success: function(data){
                   $("#altausuario").hide("slow");
                    $("#ok").show("slow");
                   
                }
            }
            );
        }
	});

});
