$(document).ready(function() {
 
	$("#owl-demo").owlCarousel({

	  autoPlay: 3000, //Set AutoPlay to 3 seconds

	  items : 1,
	  itemsDesktop : [1200,3],
	  itemsDesktopSmall : [979,3],
	  responsive: true,
	  responsiveBaseWidth: window

	});

	$("#categoria").change(function(){
		var val = $("#categoria option:selected").text();
	$("#subcategoria").empty();
		switch(val) {
		    case 'Arrendamiento':
		        $("#subcategoria").append('<option>----</option>');
		        break;
		    case 'Alquiler':
		        $("#subcategoria").append('<option>departamento</option>');
		        $("#subcategoria").append('<option>duplex</option>');
		        $("#subcategoria").append('<option>casa</option>');
		        $("#subcategoria").append('<option>chalet</option>');
		        $("#subcategoria").append('<option>oficina</option>');
		        $("#subcategoria").append('<option>local</option>');
		        $("#subcategoria").append('<option>galpon</option>');
		        break;
		    case 'Campo':
		        $("#subcategoria").append('<option>quinta</option>');
		        $("#subcategoria").append('<option>estancia</option>');
		        $("#subcategoria").append('<option>chacra</option>');
		        $("#subcategoria").append('<option>agricolas</option>');
		        $("#subcategoria").append('<option>mixto</option>');
		        $("#subcategoria").append('<option>cria</option>');
		        break;
		    case 'Propiedad':
		        $("#subcategoria").append('<option>departamento</option>');
		        $("#subcategoria").append('<option>duplex</option>');
		        $("#subcategoria").append('<option>casa</option>');
		        $("#subcategoria").append('<option>chalet</option>');
		        $("#subcategoria").append('<option>oficina</option>');
		        $("#subcategoria").append('<option>local</option>');
		        $("#subcategoria").append('<option>galpon</option>');
		        break;
		    case 'Lote':
		        $("#subcategoria").append("<option>-----</option>");	    	
		        break;
		}
	});
});
