$(function() {

	$('#apache').click(function(event) {
		if($('#edad').val()){
			$('#paso1').fadeOut('400', function() {
				$('#page_apache').fadeIn('400', function() {
					//console.log('Pagina 2 Cargada');
				});
			});
		}else{
			alert('Ingrese Edad');
		}
	});

	$('#backapa').click(function(event) {
		$('#page_apache').fadeOut('400', function() {
			$('#paso1').slideDown('400', function() {
				//console.log('Pagina 2 Cargada');
			});
		});
	});

	$('#calcular_apache').click(function(event) {
		
		var trectal=$('#trectal').val();
		var presam=$('#presam').val();
		var frecar=$('#frecar').val();
		var freres=$('#freres').val();
		var oxi=$('#oxi').val();
		var phar=$('#phar').val();
		var nap=$('#nap').val();
		var kap=$('#kap').val();
		var crea=$('#crea').val();
		var hemo=$('#hemo').val();
		var Leucocitos=$('#Leucocitos').val();

		//console.log('trectal'+trectal+' presam'+presam+' frecar'+frecar+' freres'+freres +' oxi'+oxi+' phar'+ phar+' nap'+ nap+' kap'+ kap+' crea'+ crea+' hemo'+ hemo+' Leucocitos'+Leucocitos);

		if(trectal&&presam &&frecar &&freres && oxi&& phar&& nap&& kap&& crea&& hemo&&Leucocitos){

			var c_trectal;
			var c_presam;
			var c_frecar;
			var c_freres;
			var c_oxi;
			var c_phar;
			var c_nap;
			var c_kap;
			var c_crea;
			var c_hemo;
			var c_Leucocitos;

			if(trectal>40.9){
				c_trectal=4;
			}
			if(trectal>=39&trectal<=40.9){
				c_trectal=3;
			}
			if(trectal>=38.5&trectal<=38.9){
				c_trectal=1;
			}
			if(trectal>=36&trectal<=38.4){
				c_trectal=0;
			}
			if(trectal>=34&trectal<=35.9){
				c_trectal=1;
			}
			if(trectal>=32&trectal<=33.9){
				c_trectal=2;
			}
			if(trectal>=30&trectal<=31.9){
				c_trectal=3;
			}
			if(trectal<30){
				c_trectal=4;
			}

			if(presam>159){
				c_presam=4;
			}
			if(presam>=130&presam<=159){
				c_presam=3;
			}
			if(presam>=110&presam<=129){
				c_presam=2;
			}
			if(presam>=70&presam<=109){
				c_presam=0;
			}
			if(presam>=50&presam<=69){
				c_presam=2;
			}
			if(presam<50){
				c_presam=4;
			}

			if(frecar>179){
				c_frecar=4;
			}
			if(frecar>=140&frecar<=179){
				c_frecar=3;
			}
			if(frecar>=110&frecar<=129){
				c_frecar=2;
			}
			if(frecar>=70&frecar<=109){
				c_frecar=0;
			}
			if(frecar>=55&frecar<=69){
				c_frecar=2;
			}
			if(frecar>=40&frecar<=54){
				c_frecar=3;
			}
			if(frecar<40){
				c_frecar=4;
			}

			if(freres>49){
				c_freres=4;
			}
			if(freres>=35&freres<=49){
				c_freres=3;
			}
			if(freres>=25&freres<=34){
				c_freres=1;
			}
			if(freres>=12&freres<=24){
				c_freres=0;
			}
			if(freres>=10&freres<=11){
				c_freres=1;
			}
			if(freres<6){
				c_freres=4;
			}

			if(oxi>499){
				c_oxi=4;
			}
			if(oxi>=350&oxi<=499){
				c_oxi=3;
			}
			if(oxi>=200&oxi<=349){
				c_oxi=2;
			}
			if(oxi<200){
				c_oxi=0;
			}
			if(oxi>70){
				c_oxi=0;
			}
			if(oxi>=61&oxi<=70){
				c_oxi=1;
			}
			if(oxi>=56&oxi<=60){
				c_oxi=3;
			}
			if(oxi<56){
				c_oxi=4;
			}

			if(phar>7.69){
				c_phar=4;
			}
			if(phar>=7.60&phar<=7.69){
				c_phar=3;
			}
			if(phar>=7.50&phar<=7.59){
				c_phar=1;
			}
			if(phar>=7.33&phar<=7.49){
				c_phar=0;
			}
			if(phar>=7.25&phar<=7.32){
				c_phar=2;
			}
			if(phar>=7.15&phar<=7.24){
				c_phar=3;
			}
			if(phar<7.15){
				c_phar=4;
			}

			if(nap>179){
				c_nap=4;
			}
			if(nap>=160&nap<=179){
				c_nap=3;
			}
			if(nap>=155&nap<=159){
				c_nap=2;
			}
			if(nap>=150&nap<=154){
				c_nap=1;
			}
			if(nap>=130&nap<=149){
				c_nap=0;
			}
			if(nap>=120&nap<=129){
				c_nap=2;
			}
			if(nap>=111&nap<=119){
				c_nap=3;
			}
			if(nap<111){
				c_nap=4;
			}


			if(kap>6.9){
				c_kap=4;
			}
			if(kap>=6.0&kap<=6.9){
				c_kap=3;
			}
			if(kap>=5.5&kap<=5.9){
				c_kap=1;
			}
			if(kap>=3.5&kap<=5.4){
				c_kap=0;
			}
			if(kap>=3.0&kap<=3.4){
				c_kap=1;
			}
			if(kap>=2.5&kap<=2.9){
				c_kap=2;
			}
			if(kap<2.5){
				c_kap=4;
			}

			if(crea>3.4){
				c_crea=4;
			}
			if(crea>=2&crea<=3.4){
				c_crea=3;
			}
			if(crea>=1.5&crea<=1.9){
				c_crea=2;
			}
			if(crea>=0.6&crea<=1.4){
				c_crea=0;
			}
			if(crea<0.6){
				c_crea=2;
			}

			if(hemo>59.9){
				c_hemo=4;
			}
			if(hemo>=50&hemo<=59.9){
				c_hemo=2;
			}
			if(hemo>=46&hemo<=49.9){
				c_hemo=1;
			}
			if(hemo>=30&hemo<=45.9){
				c_hemo=0;
			}
			if(hemo>=20&hemo<=29.9){
				c_hemo=2;
			}
			if(hemo<20){
				c_hemo=4;
			}

			if(Leucocitos>39.9){
				c_Leucocitos=4;
			}
			if(Leucocitos>=20&Leucocitos<=39.9){
				c_Leucocitos=2;
			}
			if(Leucocitos>=15&Leucocitos<=19.9){
				c_Leucocitos=1;
			}
			if(Leucocitos>=3&Leucocitos<=15.9){
				c_Leucocitos=0;
			}
			if(Leucocitos>=1&Leucocitos<=2.9){
				c_Leucocitos=2;
			}
			if(Leucocitos<1){
				c_Leucocitos=4;
			}

			c_trectal=parseFloat(c_trectal);
			c_presam=parseFloat(c_presam);
			c_frecar=parseFloat(c_frecar);
			c_freres=parseFloat(c_freres);
			c_oxi=parseFloat(c_oxi);
			c_phar=parseFloat(c_phar);
			c_nap=parseFloat(c_nap);
			c_kap=parseFloat(c_kap);
			c_crea=parseFloat(c_crea);
			c_hemo=parseFloat(c_hemo);
			c_Leucocitos=parseFloat(c_Leucocitos);

			var apache=c_trectal+c_presam+c_frecar+c_freres+c_oxi+c_phar+c_nap+c_kap+c_crea+c_hemo+c_Leucocitos;


			$('#page_apache').fadeOut('400', function() {
				$('#paso1').slideDown('400', function() {
					$('#apache').val(apache);
				});
			});

		}else{
			alert('Llene todos los datos');
		}


	});

});


