$(function(){
	$("#ok").hide();
	

	$("#formregistro").validate({
		
			rules: { 
                    "p1": {
                        "required": true
						
                    },
                     "p2": {
                        "required": true
                        
                    },
                     "p3": {
                        "required": true
                        
                    },
                     "p4": {
                        "required": true
                        
                    },
                     "p5": {
                        "required": true
                        
                    },
                     "p6": {
                        "required": true
                        
                    },
                     "p7": {
                        "required": true
                        
                    },
                     "p8": {
                        "required": true
                        
                    },
                     "p9": {
                        "required": true
                        
                    },
                     "p10": {
                        "required": true
                        
                    },
                     "p12": {
                        "required": true
                        
                    },
                     "p19": {
                        "required": true
                        
                    }
                     
            			
			
		},
				messages: { 
                    "p1": " Por favor responde pregunta",
                    "p2": " Por favor responde pregunta",
                    "p3": " Por favor responde pregunta",
                    "p4": " Por favor responde pregunta",
                    "p5": " Por favor responde pregunta",
                    "p6": " Por favor responde pregunta",
                    "p7": " Por favor responde pregunta",
                    "p8": " Por favor responde pregunta",
                    "p9": " Por favor responde pregunta",
                    "p10": " Por favor responde pregunta",
                    "p11": " Por favor responde pregunta",
                    "p12": " Por favor responde pregunta",
                    "p19": " Por favor responde pregunta"
                },
		
		submitHandler: function(form)
		{
			

			$(form).find("#enviar").attr("disabled", "disabled").attr("value","Evaluando...");
            var dataString = 'p1='+$('#p1').val()+'&p2='+$('#p2').val()+'&p3='+$('#p3').val()+'&p4='+$('#p4').val()+'&p5='+$('#p5').val()+'&p6='+$('#p6').val()+'&p7='+$('#p7').val()+'&p8='+$('#p8').val()+'&p9='+$('#p9').val()+'&p10='+$('#p10').val()+'&p11='+$('#p11').val()+'&p12='+$('#p12').val()+'&p19='+$('#p19').val();
            $.ajax({
                type: "POST",
                url:"new_t.php",
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
