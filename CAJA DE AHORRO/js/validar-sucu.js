$(function(){
	$("#ok").hide();
	

	$("#formregistro").validate({
		
			rules: { 
                    "id": {
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
                    "cp": {
                        "required": true
                    }
            
			
			
		},
				messages: { 
                    "id": " Ingrese una id",

                    "nombre":{
                    "required": " Ingrese nombre"
                    },

                     "calle":{
                    "required": " Ingrese una calle"
                    },
				
                    "num": {
                        "required": " Ingrese el numero"
                    },

                    "cp": {
                        "required": " Ingrese codigo postal"
                    }
					
					
					
                },
		
		submitHandler: function(form)
		{
			

			$(form).find("#enviar").attr("disabled", "disabled").attr("value","Evaluando...");
            var dataString = 'id='+$('#id').val()+'&nombre='+$('#nombre').val()+'&calle='+$('#calle').val()+'&num='+$('#num').val()+'&cp='+$('#cp').val()+'&formid=1';
            $.ajax({
                type: "POST",
                url:"alta_sucu.php",
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
