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
                    }
	
					
                },
		
		submitHandler: function(form)
		{
			

			$(form).find("#enviar").attr("disabled", "disabled").attr("value","Evaluando...");
            var dataString = 'id='+$('#id').val()+'&ape_pat='+$('#ape_pat').val()+'&ape_mat='+$('#ape_mat').val()+'&nombre='+$('#nombre').val()+'&formid=1';
            $.ajax({
                type: "POST",
                url:"alta_emp.php",
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
