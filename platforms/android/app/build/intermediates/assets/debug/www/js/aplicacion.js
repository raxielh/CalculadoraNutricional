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
	console.log(rch);
	console.log(rcm);

	if(rch){

		$("#lh,#f1h,#f2h,#f3h,#f4h,#f5h,#f6h,#f7h").show();
		$("#lm,#f1m,#f2m,#f3m,#f4m,#f5m,#f6m,#f7m").hide();

		var vf1=$("#vf1").text();
		vf1=parseFloat(vf1);
		rch=parseFloat(rch);
		f1h=rch/vf1;
		f1h=f1h.toFixed(6);
		$("#f1h").text(f1h);	

		var vf2=$("#vf2").text();
		vf2=parseFloat(vf2);
		rch=parseFloat(rch);
		f2h=rch/vf2;
		f2h=f2h.toFixed(6);
		$("#f2h").text(f2h);

		var vf3=$("#vf3").text();
		vf3=parseFloat(vf3);
		rch=parseFloat(rch);
		f3h=rch/vf3;
		f3h=f3h.toFixed(6);
		$("#f3h").text(f3h);

		var vf4=$("#vf4").text();
		vf4=parseFloat(vf4);
		rch=parseFloat(rch);
		f4h=rch/vf4;
		f4h=f4h.toFixed(6);
		$("#f4h").text(f4h);	

		var vf5=$("#vf5").text();
		vf5=parseFloat(vf5);
		rch=parseFloat(rch);
		f5h=rch/vf5;
		f5h=f5h.toFixed(6);
		$("#f5h").text(f5h);

		var vf6=$("#vf6").text();
		vf6=parseFloat(vf6);
		rch=parseFloat(rch);
		f6h=rch/vf6;
		f6h=f6h.toFixed(6);
		$("#f6h").text(f6h);

		var vf7=$("#vf7").text();
		vf7=parseFloat(vf7);
		rch=parseFloat(rch);
		f7h=rch/vf7;
		f7h=f7h.toFixed(6);
		$("#f7h").text(f7h);

	}
	if(rcm){

		$("#lh,#f1h,#f2h,#f3h,#f4h,#f5h,#f6h,#f7h").hide();
		$("#lm,#f1m,#f2m,#f3m,#f4m,#f5m,#f6m,#f7m").show();
		
		var vf1=$("#vf1").text();
		vf1=parseFloat(vf1);
		rcm=parseFloat(rcm);
		f1m=rcm/vf1;
		f1m=f1m.toFixed(6);
		$("#f1m").text(f1m);

		var vf2=$("#vf2").text();
		vf2=parseFloat(vf2);
		rcm=parseFloat(rcm);
		f2m=rcm/vf2;
		f2m=f2m.toFixed(6);
		$("#f2m").text(f2m);

		var vf3=$("#vf3").text();
		vf3=parseFloat(vf3);
		rcm=parseFloat(rcm);
		f3h=rcm/vf3;
		f3h=f3h.toFixed(6);
		$("#f3m").text(f3h);	

		var vf4=$("#vf4").text();
		vf4=parseFloat(vf4);
		rcm=parseFloat(rcm);
		f4h=rcm/vf4;
		f4h=f4h.toFixed(6);
		$("#f4m").text(f4h);	

		var vf5=$("#vf5").text();
		vf5=parseFloat(vf5);
		rcm=parseFloat(rcm);
		f5h=rcm/vf5;
		f5h=f5h.toFixed(6);
		$("#f5m").text(f5h);

		var vf6=$("#vf6").text();
		vf6=parseFloat(vf6);
		rcm=parseFloat(rcm);
		f6h=rcm/vf6;
		f6h=f6h.toFixed(6);
		$("#f6m").text(f6h);

		var vf7=$("#vf7").text();
		vf7=parseFloat(vf7);
		rcm=parseFloat(rcm);
		f7h=rcm/vf7;
		f7h=f7h.toFixed(6);
		$("#f7m").text(f7h);

	}



}