/* Reglas de encriptación: 
"e" es convertido para "enter"
"i" es convertido para "imes"
"a" es convertido para "ai"  
"o" es convertido para "ober"  
"u" es convertido para "ufat" 
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");

	botonEncriptar.addEventListener("click",function(event){
			event.preventDefault();
			var textoaMostrar = [];
			var textoIngresado = document.querySelector("#input-texto");
			var texto = textoIngresado.value;

			for (var i = 0; i<texto.length; i++){
				if((texto[i] != "a") && (texto[i] != "e") && (texto[i] != "i") && (texto[i] != "o") && (texto[i] != "u") ) {
					textoaMostrar.push(texto[i]);
					}
				else{
					if(texto[i] == "a"){
						textoaMostrar.push("ai");
						}
					if(texto[i] == "e"){
						textoaMostrar.push("enter");
						}
					if(texto[i] == "i"){
						textoaMostrar.push("imes");
						}
					if(texto[i] == "o"){
						textoaMostrar.push("ober");
						}
					if(texto[i] == "u"){
						textoaMostrar.push("ufat");
						}}}

		mostrarTexto(textoaMostrar);
		

	});

	botonDesencriptar.addEventListener("click",function(event){
			event.preventDefault();
			var textoaMostrar = [];
			var textoIngresado = document.querySelector("#input-texto");
			var texto = textoIngresado.value;

			for (var i = 0; i<texto.length; i++){
				if((texto[i] != "a") && (texto[i] != "e") && (texto[i] != "i") && (texto[i] != "o") && (texto[i] != "u") ) {
					textoaMostrar.push(texto[i]);
					}
				else{
				switch (texto[i])
					case if(texcto[i] == "e"){
						textoaMostrar.push("e");
						i= i+4;
						}
					if(texto[i] == "i"){
						textoaMostrar.push("i");
						i= i+3;
						}
					if(texto[i] == "a"){
						textoaMostrar.push("a");
						i = i+1 ;
						}
					if(texto[i] == "o"){
						textoaMostrar.push("o");
						i= i+3;
						}
					if(texto[i] == "u"){
						textoaMostrar.push("u");
						i= i+3;
						}}}
		console.log(textoaMostrar);
		mostrarTexto(textoaMostrar);	
	});

	function mostrarTexto(textoaMostrar){
			
			var mostrarTexto = document.querySelector("#msg");
			console.log(mostrarTexto.value);
			mostrarTexto.value = textoaMostrar.join("");
			console.log(textoaMostrar.join(""));
	}

	
	