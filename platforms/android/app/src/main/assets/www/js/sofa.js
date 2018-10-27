$(function() {

	$('#sofa').click(function(event) {
		//alert();
		$('#paso1').fadeOut('400', function() {
			$('#page_sofa').fadeIn('400', function() {
				//console.log('Pagina 2 Cargada');
			});
		});
	});

	$('#backsofa').click(function(event) {
		$('#page_sofa').fadeOut('400', function() {
			$('#paso1').slideDown('400', function() {
				//console.log('Pagina 2 Cargada');
			});
		});
	});

	$('#calcular_sofa').click(function(event) {


		var Respiracion=$('#Respiracion').val();
		var snc=$('#snc').val();
		var Coagulacion=$('#Coagulacion').val();
		var Higado=$('#Higado').val();
		var Cardiovascular=$('#Cardiovascular').val();
		var Renal=$('#Renal').val();
		
		if(Respiracion&&snc &&Coagulacion &&Higado && Cardiovascular&& Renal){

			var c_Respiracion;
			var c_snc;
			var c_Coagulacion;
			var c_Higado;
			var c_Cardiovascular;
			var c_Renal;
/*
			if(Respiracion>400){
				c_Respiracion=0;
			}
			if(Respiracion<400){
				c_Respiracion=1;
			}
			if(Respiracion<300){
				c_Respiracion=2;
			}
			if(Respiracion<200){
				c_Respiracion=3;
			}
			if(Respiracion<100){
				c_Respiracion=4;
			}

			if(Coagulacion>150){
				c_Coagulacion=0;
			}
			if(Coagulacion<150){
				c_Coagulacion=1;
			}
			if(Coagulacion<100){
				c_Coagulacion=2;
			}
			if(Coagulacion<50){
				c_Coagulacion=3;
			}
			if(Coagulacion<20){
				c_Coagulacion=4;
			}

			if(Higado<1.2){
				c_Higado=0;
			}
			if(Higado>=1.2&Higado<=1.9){
				c_Higado=1;
			}
			if(Higado>=2.0&Higado<=5.9){
				c_Higado=2;
			}
			if(Higado>=5.0&Higado<=11.9){
				c_Higado=3;
			}
			if(Higado>=12.0){
				c_Higado=4;
			}

			if(snc>=15){
				c_snc=0;
			}
			if(snc<=13&snc>=14){
				c_snc=1;
			}
			if(snc>=10&snc<=12){
				c_snc=2;
			}
			if(snc>=6&snc<=9){
				c_snc=3;
			}
			if(snc<6){
				c_snc=4;
			}

			if(Renal<1.2){
				c_Renal=0;
			}
			if(Renal>=1.2&Renal<=1.9){
				c_Renal=1;
			}
			if(Renal>=2.0&Renal<=3.4){
				c_Renal=2;
			}
			if(Renal>=3.5&Renal<=4.9){
				c_Renal=3;
			}
			if(Renal>5.0){
				c_Renal=4;
			}
*/

			c_Respiracion=parseFloat(Respiracion);
			c_Coagulacion=parseFloat(Coagulacion);
			c_Higado=parseFloat(Higado);
			c_snc=parseFloat(snc);
			c_Renal=parseFloat(Renal);

			var sofa=c_Respiracion+c_Coagulacion+c_Higado+c_snc+c_Renal;


			$('#page_sofa').fadeOut('400', function() {
				$('#paso1').slideDown('400', function() {
					$('#sofa').val(sofa);
				});
			});

		}else{
			alert('Llene todos los datos');
		}


	});

});


