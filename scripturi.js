	$(document).ready(function(){
		$("#google_map").click(function(){
			$("#map").toggle();
		});
		
	});

	$(document).ready(function() {
		$("#afiseaza").click(function() {
			$("#rezervare_curenta").show();
		
			$("#rezervare").append("<i>"+$("#nume").val()+"<br>"+$("#prenume").val()+"<br>"+$("#mail").val()+"<br>"+$("#telefon").val()+"<br>"+$("#comentarii").val()+"</i>");
			
	
		});
	
	});
	
	
	$(document).ready(function() {
		$("#afiseaza").dblclick(function() {
			$("#rezervare_curenta").empty();
			});
	
	});	
	
	$(document).ready(function() {
		$("#calculeaza").click(function() {
		var timp = 0;
	

		if (($("#plecare").val() == "cluj" && 
			 $("#sosire").val() == "madrid") && 
			  $("#avion").is(":checked"))  
				timp=2;
	
		else 	timp=6;
		$("#timp").val(timp+" ore");
				
				
			});
	
	});	
