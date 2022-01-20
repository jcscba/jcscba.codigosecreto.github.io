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
					switch(texto[i]){
					case 'a':
						textoaMostrar.push("ai");
						break;
					case 'e':	
						textoaMostrar.push("enter");
						break;
					case 'i':
						textoaMostrar.push("imes");
						break;
					case 'o':
						textoaMostrar.push("ober");
						break;
					case 'u':
						textoaMostrar.push("ufat");
						break;
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
					switch(texto[i]){
						case 'a':
							textoaMostrar.push("a");
							i=i+1;
							break;
						case 'e':	
							textoaMostrar.push("e");
							i=i+4;
							break;
						case 'i':
							textoaMostrar.push("i");
							i=i+3;
							break;
						case 'o':
							textoaMostrar.push("o");
							i=i+3;
							break;
						case 'u':
							textoaMostrar.push("u");
							i=i+3;
							break;
							}}}
		mostrarTexto(textoaMostrar);	
	});

	function mostrarTexto(textoaMostrar){
			
			var mostrarTexto = document.querySelector("#msg");
			mostrarTexto.value = textoaMostrar.join("");
			
	}

	
	