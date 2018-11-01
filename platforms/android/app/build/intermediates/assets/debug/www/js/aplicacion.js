$(function() {
	console.log('Ready');

	$('#no_on').click(function(event) {
		$('#page_0').fadeOut('400', function() {
			$('#page_1').fadeIn('400', function() {
				//console.log('Pagina 1 Cargada');
			});
		});
	});

	$('#si_on').click(function(event) {
		$('#page_0').fadeOut('400', function() {
			$('#page_2').fadeIn('400', function() {
				//console.log('Pagina 2 Cargada');
			});
		});
	});

	$('#back10').click(function(event) {
		$('#page_1').fadeOut('400', function() {
			$('#page_0').slideDown('400', function() {
				//console.log('Pagina 2 Cargada');
			});
		});
	});

	$('#back20').click(function(event) {
		$('#page_2').fadeOut('400', function() {
			$('#page_0').slideDown('400', function() {
				//console.log('Pagina 2 Cargada');
			});
		});
	});

	$('#backp1').click(function(event) {
		$('#paso2').fadeOut('400', function() {
			$('#paso1').slideDown('400', function() {
				//console.log('Paso 1 Cargado');
			});
		});
	});

	$('#backp2').click(function(event) {
		$('#paso3').fadeOut('400', function() {
			$('#paso2').slideDown('400', function() {
				//console.log('Paso 2 Cargado');
			});
		});
	});

	$('#sp12').click(function(event) {

		var ps1=$("#puede_seguir1").val();

		if(ps1){
			$('#paso1').fadeOut('400', function() {
				$('#paso2').fadeIn('400', function() {
					//console.log('Paso 2 Cargado');
				});
			});
		}else{
			alert('Llene todos los Datos');
		}


	});

	$('#sp1_3').click(function(event) {

		var ps2=$("#puede_seguir2").val();

		if(ps2){
			$('#paso2').fadeOut('400', function() {
				$('#paso3').fadeIn('400', function() {
					//console.log('Paso 3 Cargado');
				});
			});
		}else{
			alert('Llene todos los Datos');
		}

	});
/* Paso 1 */
	$("#edad").keyup(function(e) {
		calcular_paso1();
	});
	$("#apache").keyup(function(e) {
		calcular_paso1();
	});
	$("#sofa").keyup(function(e) {
		calcular_paso1();
	});
	$("#Numerocomorbilidades").keyup(function(e) {
		calcular_paso1();
	});
	$("#diashospitaliacion").keyup(function(e) {
		calcular_paso1();
	});
/* Paso 2 */
	$("#Peso").keyup(function(e) {
		calcular_paso2();
	});

	$("#Talla").keyup(function(e) {
		calcular_paso2();
	});

	$("#sexo").change(function(e) {
		calcular_paso2();
	});

	$("#estado").change(function(e) {
		calcular_paso2();
	});

	$("#caloriasc").change(function(e) {
		calcular_paso2();
	});



});



function calcular_paso1()
{
	var edad=$("#edad").val();
	edad=parseInt(edad);
	var c_edad;
	if(edad<50){
		c_edad=0;
	}
	if(edad>=50 & edad<=75){
		c_edad=1;
	}
	if(edad>75){
		c_edad=2;
	}
	//console.log("Edad: "+c_edad);

	var apache=$("#apache").val();
	apache=parseInt(apache);
	var c_apache;
	if(apache<=15){
		c_apache=0;
	}
	if(apache>15 & apache<=20){
		c_apache=1;
	}
	if(apache>20 & apache<=28){
		c_apache=2;
	}
	if(apache>28){
		c_apache=3;
	}
	//console.log("Apache: "+c_apache);

	var sofa=$("#sofa").val();
	sofa=parseInt(sofa);
	var c_sofa;
	if(sofa<6){
		c_sofa=0;
	}
	if(sofa>=6 & sofa<=10){
		c_sofa=1;
	}
	if(sofa>10){
		c_sofa=2;
	}
	//console.log("Sofa: "+c_sofa);

	var ncormo=$("#Numerocomorbilidades").val();
	ncormo=parseInt(ncormo);
	var c_ncormo;
	if(ncormo>=0 & ncormo<=1){
		c_ncormo=2;
	}
	if(ncormo>=2){
		c_ncormo=1;
	}
	//console.log("Numerocomorbilidades: "+c_ncormo);

	var diashospitaliacion=$("#diashospitaliacion").val();
	diashospitaliacion=parseInt(diashospitaliacion);
	var c_diashospitaliacion;
	if(diashospitaliacion>=0 & diashospitaliacion<=1){
		c_diashospitaliacion=0;
	}
	if(diashospitaliacion>1){
		c_diashospitaliacion=1;
	}
	//console.log("diashospitaliacion: "+c_diashospitaliacion);
	//c_edad+c_apache+
	riesgo=c_edad+c_apache+c_sofa+c_ncormo+c_diashospitaliacion;

	//console.log(riesgo);

	var msg_riesgo;
	if(riesgo<4){
		$(".riesgo").css( "background-color", "#0d9e23" );
		$(".riesgo").css( "padding-left", "10px" );
		$(".riesgo").css( "padding-right", "10px" );
		$(".riesgo").css( "border-radius", "13px" );
		$(".riesgo").css( "margin-bottom", "10px" );
		$(".riesgo").css( "color", "#fff" );
		msg_riesgo="Bajo riesgo nutricional";
	}
	if(riesgo>=4){
		$(".riesgo").css( "background-color", "#dd4236" );
		$(".riesgo").css( "padding-left", "10px" );
		$(".riesgo").css( "padding-right", "10px" );
		$(".riesgo").css( "border-radius", "13px" );
		$(".riesgo").css( "margin-bottom", "10px" );
		$(".riesgo").css( "color", "#fff" );
		msg_riesgo="Alto riesgo nutricional";
	}

	$(".riesgo").text(msg_riesgo);
	$("#puede_seguir1").val(msg_riesgo);

	//console.log(msg_riesgo);

}



function calcular_paso2()
{
	var Peso=$("#Peso").val();
	peso=parseFloat(Peso);
	$(".pctr").text(peso);

	ra=25*peso;
	$(".ra").text(ra);

	var Talla=$("#Talla").val();
	Talla=parseFloat(Talla);

	var sexo=$("#sexo").val();
	sexo=parseInt(sexo);

	var imc=(peso/Talla)/Talla;
	var imc=imc.toFixed(2)

	$(".imc").text(imc);

	var descripcion_imc=null;

	if(imc<18.5){
		$("#mpa").hide();
		descripcion_imc="Bajo Peso";
	}
	if(imc>=18.5 & imc<=24.9){
		$("#mpa").hide();
		descripcion_imc="NormoPeso";
	}
	if(imc>=25 & imc<=26.9){
		$("#mpa").hide();
		descripcion_imc="Sobre Peso Tipo 1";
	}
	if(imc>=27 & imc<=29.9){
		$("#mpa").hide();
		descripcion_imc="Sobre Peso Tipo 2";
	}
	if(imc>=30 & imc<=34.9){
		$("#mpa").show();
		descripcion_imc="Obesidad Tipo 1";
	}
	if(imc>=35 & imc<=39.9){
		$("#mpa").show();
		descripcion_imc="Obesidad Tipo 2";
	}
	if(imc>=40 & imc<=49.9){
		$("#mpa").show();
		descripcion_imc="Obesidad Tipo 3 Morbida";
	}
	if(imc>50){
		$("#mpa").show();
		descripcion_imc="Obesidad Tipo 4 Extrema";
	}
	
	
	$(".imcd").text(descripcion_imc);

	var rch,rcm;

	if(sexo==1){
		peso_ideal=(Talla*100-154)*0.9+50;
		var pi=(Talla*100-154)*0.9+50;
		pi=pi.toFixed(2);
		$(".pi").text(pi);
		var pp=(Talla*100-152.4)*0.91+50;
		pp=pp.toFixed(2);
		$(".pp").text(pp);
		var pa=(peso-peso_ideal)*0.25+peso_ideal;
		pa=pa.toFixed(2);
		$(".pa").text(pa);

		var rn=pi*25;
		rn=rn.toFixed(2);
		$("#rn").text(rn);



		if(descripcion_imc=="NormoPeso"||descripcion_imc=="Sobre Peso Tipo 1"||descripcion_imc=="Sobre Peso Tipo 2"){
			$(".rc").text(25*peso_ideal);
			rch=25*peso_ideal;
		}

		if(descripcion_imc=="Bajo Peso"){
			$(".rc").text(25*peso);
			rch=25*peso;

		}


		var estado=$("#estado").val();

		if(estado=='Normal'){
			$(".rp").text(2*pa);
		}
		if(estado=='Trauma'||estado=='Hemodialisis'||estado=='Quemadura'){
			$(".rp").text(2*peso);
		}
		if(estado=='pacientecritico'){
			$(".rp").text(1.5*peso);
		}

		if(descripcion_imc=="Obesidad Tipo 1"||descripcion_imc=="Obesidad Tipo 2"||descripcion_imc=="Obesidad Tipo 3 Morbida"||descripcion_imc=="Obesidad Tipo 4 Extrema"){
			$(".rc").text(25*pa);
			rch=25*pa;
			if(estado=='Trauma'){
				$(".rp").text(pa*2);
			}
		}



		



		
	}else{
		peso_ideal=(Talla*100-154)*0.9+45.5;
		var pi=(Talla*100-154)*0.9+45.5;
		pi=pi.toFixed(2);
		$(".pi").text(pi);
		var pp=(Talla*100-152.4)*0.91+45.5;
		pp=pp.toFixed(2);
		$(".pp").text(pp);
		var pa=(peso-peso_ideal)*0.25+peso_ideal;
		pa=pa.toFixed(2);
		$(".pa").text(pa);

		var rn=pi*25;
		rn=rn.toFixed(2);
		$("#rn").text(rn);


		if(descripcion_imc=="NormoPeso"||descripcion_imc=="Sobre Peso Tipo 1"||descripcion_imc=="Sobre Peso Tipo 2"){
			$(".rc").text(25*peso_ideal);
			rcm=25*peso_ideal;
		}

		if(descripcion_imc=="Bajo Peso"){
			$(".rc").text(25*peso);
			rcm=25*peso;
		}


		var estado=$("#estado").val();

		if(estado=='Normal'){
			$(".rp").text(2*pa);
		}
		if(estado=='Trauma'||estado=='Hemodialisis'||estado=='Quemadura'){
			$(".rp").text(2*peso);
		}
		if(estado=='pacientecritico'){
			$(".rp").text(1.5*peso);
		}

		if(descripcion_imc=="Obesidad Tipo 1"||descripcion_imc=="Obesidad Tipo 2"||descripcion_imc=="Obesidad Tipo 3 Morbida"||descripcion_imc=="Obesidad Tipo 4 Extrema"){
			$(".rc").text(23*pa);
			rcm=23*pa;
			if(estado=='Trauma'){
				$(".rp").text(pa*2);
			}
		}


	}
	$("#puede_seguir2").val(estado);
	calcular_paso3(rch,rcm);

	

}


function calcular_paso3(rch,rcm){
	//console.log(rch);
	//console.log(rcm);

	var cp=$('#caloriasc').val();
	var rn=$('#rn').text();

	cp=parseInt(cp);
	rn=parseInt(rn);

	console.log(cp);
	console.log(rn);

	var rr=rn-cp;

	console.log(rr);
	$('#rr').text(rr);




	if(rch){
		$("#lh,#f1h,#f2h,#f3h,#f4h,#f5h,#f6h,#f7h,#f8h,#f9h,#f10h,#f11h,#f12h,#f13h,#f14h").show();
		$("#lm,#f1m,#f2m,#f3m,#f4m,#f5m,#f6m,#f7m,#f8m,#f9m,#f10m,#f11m,#f12m,#f13m,#f14m").hide();
	}
	if(rcm){
		$("#lh,#f1h,#f2h,#f3h,#f4h,#f5h,#f6h,#f7h,#f8h,#f9h,#f10h,#f11h,#f12h,#f13h,#f14h").hide();
		$("#lm,#f1m,#f2m,#f3m,#f4m,#f5m,#f6m,#f7m,#f8m,#f9m,#f10m,#f11m,#f12m,#f13m,#f14m").show();
	}

		var vf1=$("#vf1").text();
		vf1=parseInt(vf1);
		$("#f1h").text(rr/vf1);	
		$("#f1m").text(rr/vf1);

		var vf2=$("#vf2").text();
		vf2=parseInt(vf2);
		$("#f2h").text(rr/vf2);	
		$("#f2m").text(rr/vf2);

		var vf3=$("#vf3").text();
		vf3=parseInt(vf3);
		$("#f3h").text(rr/vf3);	
		$("#f3m").text(rr/vf3);

		var vf4=$("#vf4").text();
		vf4=parseInt(vf4);
		$("#f4h").text(rr/vf4);	
		$("#f4m").text(rr/vf4);

		var vf5=$("#vf5").text();
		vf5=parseInt(vf5);
		$("#f5h").text(rr/vf5);	
		$("#f5m").text(rr/vf5);

		var vf6=$("#vf6").text();
		vf6=parseInt(vf6);
		$("#f6h").text(rr/vf6);	
		$("#f6m").text(rr/vf6);

		var vf7=$("#vf7").text();
		vf7=parseInt(vf7);
		$("#f7h").text(rr/vf7);	
		$("#f7m").text(rr/vf7);

		var vf8=$("#vf8").text();
		vf8=parseInt(vf8);
		$("#f8h").text(rr/vf8);	
		$("#f8m").text(rr/vf8);

		var vf9=$("#vf9").text();
		vf9=parseInt(vf9);
		$("#f9h").text(rr/vf9);	
		$("#f9m").text(rr/vf9);

		var vf10=$("#vf10").text();
		vf10=parseInt(vf10);
		$("#f10h").text(rr/vf10);	
		$("#f10m").text(rr/vf10);

		var vf11=$("#vf11").text();
		vf11=parseInt(vf1);
		$("#f11h").text(rr/vf11);	
		$("#f11m").text(rr/vf11);

		var vf12=$("#vf12").text();
		vf12=parseInt(vf12);
		$("#f12h").text(rr/vf12);	
		$("#f12m").text(rr/vf12);

		var vf13=$("#vf13").text();
		vf13=parseInt(vf13);
		$("#f13h").text(rr/vf13);	
		$("#f13m").text(rr/vf13);

		var vf14=$("#vf14").text();
		vf14=parseInt(vf14);
		$("#f14h").text(rr/vf14);	
		$("#f14m").text(rr/vf14);









}