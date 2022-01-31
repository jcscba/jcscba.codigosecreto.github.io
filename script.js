var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");


		
	botonEncriptar.addEventListener("click",function(event){
		errorCaracteres.classList.add("invisible");
		event.preventDefault();
		var textoIngresado = document.querySelector("#input-texto");
		var texto = textoIngresado.value;
		var valido = texto.match(/[^a-z ]/);
			
		if(!valido){
			var textoaMostrar = encriptarTexto (texto);
			mostrarTexto(textoaMostrar);
		}
		else{
			var error =document.querySelector("#errorCaracteres");
			errorCaracteres.classList.remove("invisible");
		}
	});

	botonDesencriptar.addEventListener("click",function(event){
		event.preventDefault();
		var textoIngresado = document.querySelector("#input-texto");
		var texto = textoIngresado.value;
		var textoaMostrar = desencriptarTexto(texto);
		mostrarTexto(textoaMostrar);	
	});

	botonCopiar.addEventListener("click",function(event){
		event.preventDefault();
		var copiarTexto = document.querySelector("#msg");
		copiarTexto.focus();
		document.execCommand("selectAll");
		document.execCommand('copy');

	});

	function encriptarTexto (texto) {

		var textoEncriptado	= [];	
		for (var i = 0; i<texto.length; i++){
			if((texto[i] != "a") && (texto[i] != "e") && (texto[i] != "i") && (texto[i] != "o") && (texto[i] != "u") ) {
				textoEncriptado.push(texto[i]);
			}
			else{
				switch(texto[i]){
					case 'a':
						textoEncriptado.push("ai");
						break;
					case 'e':	
						textoEncriptado.push("enter");
						break;
					case 'i':
						textoEncriptado.push("imes");
						break;
					case 'o':
						textoEncriptado.push("ober");
						break;
					case 'u':
						textoEncriptado.push("ufat");
						break;
				}
			}
		}

		return textoEncriptado;
	}

	function desencriptarTexto(texto){

		var textoDesencriptado = [];
		for (var i = 0; i<texto.length; i++){
			if((texto[i] != "a") && (texto[i] != "e") && (texto[i] != "i") && (texto[i] != "o") && (texto[i] != "u") ) {
				textoDesencriptado.push(texto[i]);
			}
			else{
				switch(texto[i]){
					case 'a':
						textoDesencriptado.push("a");
						i=i+1;
						break;
					case 'e':	
						textoDesencriptado.push("e");
						i=i+4;
						break;
					case 'i':
						textoDesencriptado.push("i");
						i=i+3;
						break;
					case 'o':
						textoDesencriptado.push("o");
						i=i+3;
						break;
					case 'u':
						textoDesencriptado.push("u");
						i=i+3;
						break;
				}
			}
		}

		return textoDesencriptado;
	}

	function mostrarTexto(textoaMostrar){
			
			var mostrarTexto = document.querySelector("#msg");
			mostrarTexto.value = textoaMostrar.join("");
			
	}



	
	